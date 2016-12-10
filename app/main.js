'use strict';
import { AppContainer } from 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let container = document.querySelector('[data-component="react"]');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  container
);


if (module.hot) {
  module.hot.accept('./components/app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/app').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      container
    );
  });
}
