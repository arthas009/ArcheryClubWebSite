import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BlogHeaderComponent from './material-ui/Header/BlogHeaderComponent';
import {HashRouter} from 'react-router-dom';
import Footer from './material-ui/Components/Footer';

/*
ReactDOM.render(
  <React.StrictMode>
  <SwipeableContent></SwipeableContent> 
  </React.StrictMode>,
  document.getElementById('carousel_section')
);
*/

ReactDOM.render(
  <React.Fragment>
  <Footer description ="" title= ""></Footer>   
  </React.Fragment>,
  document.getElementById('footer')
);

ReactDOM.render(
  <HashRouter>
    <BlogHeaderComponent />
  </HashRouter>,
  document.getElementById('toolbar_section')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
