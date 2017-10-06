import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = localStorgage.state ? JSON.parse(localStorgage.state) : {};
  const preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
