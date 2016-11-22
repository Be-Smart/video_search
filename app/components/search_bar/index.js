'use strict';

import React from 'react';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    return (
      <div>
        <input onInput={event => this.setState({ term: event.target.value })} />
        Value: {this.state.term}
      </div>
    );
  }

  // onInputChange (e) {
  //   console.log(e.target.value);
  // }
};

export default SearchBar;
