import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import Blog from './Blog';
import Technology from './Technology';
import Design from './Design';
import Culture from './Culture';

import Sidebar from './Sidebar';
import ResponsiveDrawer from './ResponsiveDrawer.js';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '/Technology.html' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];




export default function BlogHeaderComponent() {
  // Default style function of Mui
  const classes = useStyles();

  const [whichPage, setwhichPage] = useState("");

  const changePage = (newPage) =>  
  {
    //setState()
    //This will trigger a refresh
    setwhichPage(newPage);
  }
  
  if(whichPage === "")
  {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <Blog />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else if(whichPage === "Technology")
  {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <Technology />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else if(whichPage === "Design")
  {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <Design />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else if(whichPage === "Culture")
  {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(
      <React.StrictMode>
        <Culture />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <button onClick={() => changePage("Technology")}></button>
        <Header title="" sections={sections} handleClick = {changePage}/>
      </Container>
    </React.Fragment>
  );
  
}
