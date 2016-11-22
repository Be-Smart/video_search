'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_PARAMS = {
  LINK: 'https://www.googleapis.com/youtube/v3/search?',
  KEY: 'AIzaSyC8K3SZNbMysGr0hEuEw-F6A99CcnoyjTc',
  PART: 'snippet',
  TYPE: 'video',
  MAX_RESULTS: 10,
  Q: 'react+js'
};
const API_REQUEST = `${API_PARAMS.LINK}part=${API_PARAMS.PART}&q=${API_PARAMS.Q}&type=${API_PARAMS.TYPE}&maxResults=${API_PARAMS.MAX_RESULTS}&key=${API_PARAMS.KEY}`;


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    axios.get(API_REQUEST)
    .then(res => {
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0]
      });
      console.log(this.state.videos[0]);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selected => this.setState({selectedVideo: selected}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

let container = document.querySelector('[data-component="react"]');
ReactDOM.render(<App />, container);
