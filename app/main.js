'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';

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

    this.state = { videos: [] };

    axios.get(API_REQUEST)
    .then(res => {
      this.setState({videos: res.data.items});
      console.log(this.state.videos);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

let container = document.querySelector('[data-component="react"]');
ReactDOM.render(<App />, container);
