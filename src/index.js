/* eslint-disable arrow-body-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';

const render = () => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
