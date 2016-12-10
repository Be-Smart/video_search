'use strict';
import React from 'react';
import axios from 'axios';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import './main.sass';

const API_PARAMS = {
  LINK: 'https://www.googleapis.com/youtube/v3/search?',
  KEY: 'AIzaSyC8K3SZNbMysGr0hEuEw-F6A99CcnoyjTc',
  PART: 'snippet',
  TYPE: 'video',
  MAX_RESULTS: 10,
};

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this._videoSearch();
  }

  _videoSearch (searchTerm='react+js') {
    API_PARAMS.Q = searchTerm;
    let url = `${API_PARAMS.LINK}part=${API_PARAMS.PART}&q=${API_PARAMS.Q}&type=${API_PARAMS.TYPE}&maxResults=${API_PARAMS.MAX_RESULTS}&key=${API_PARAMS.KEY}`;

    axios.get(url)
    .then(res => {
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  _debounce (func, wait, immediate) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  render () {
    let videoSearch = this._debounce( (term) => {this._videoSearch(term)}, 500 );

    return (
      <div className='container'>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className='video__wrap'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={ selected => this.setState({selectedVideo: selected}) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
