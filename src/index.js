import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BlogHeaderComponent from './material-ui/Header/BlogHeaderComponent';
import SwipeableContent from './material-ui/Components/SwipeableContent';
import Footer from './material-ui/Components/Footer';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';


ReactDOM.render(
  <React.StrictMode>
  <SwipeableContent></SwipeableContent> 
  </React.StrictMode>,
  document.getElementById('carousel_section')
);
ReactDOM.render(
  <React.StrictMode>
  <Footer description ="" title= ""></Footer>   
  </React.StrictMode>,
  document.getElementById('footer')
);

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
