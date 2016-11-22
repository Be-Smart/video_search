'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';



class App extends React.Component {
  constructor (props) {
    super(props);


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
