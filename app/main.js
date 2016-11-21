'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello World!!!</div>;
};

let container = document.querySelector('[data-component="react"]');
ReactDOM.render(<App />, container);
