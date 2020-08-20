import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from "./material-ui/Blog"
import * as serviceWorker from './serviceWorker';
import Technology from './material-ui/Technology';
import BlogHeaderComponent from './material-ui/BlogHeaderComponent';

ReactDOM.render(
  <React.StrictMode>
    <BlogHeaderComponent />
  </React.StrictMode>,
  document.getElementById('toolbar_section')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
