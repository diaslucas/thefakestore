/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';

const render = () => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(<App />, document.getElementById('root'));
};

render();
