import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = localStorgage.state ? JSON.parse(localStorgage.state) : {};
  const preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
