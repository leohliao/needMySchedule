import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorgage.state ? JSON.parse(localStorgage.state) : {};
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('content');
  ReactDom.render(root);
});
