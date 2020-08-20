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
import Main from './Main';
import Technology from './Technology';
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

const mainFeaturedPost = {
  title: '',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  imgText: '',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Haber 1',
    date: 'Ağustos 2020',
    description:
      'Yarışmada ilk 3\'e giren sporcularımız',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkTextt: 'Okumaya Devam Et..'
  },
  {
    title: 'Haber 2',
    date: 'Haziran 2020',
    description:
    'Türkiyenin en değerli klübü seçildik !',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkTextt: 'Okumaya Devam Et..'
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


export default function BlogHeaderComponent() {
  const classes = useStyles();
  const [whichPage, setwhichPage] = useState("");
  const changePage = (newPage) =>  
  {
    let x = newPage;
    setwhichPage(x);
    console.log(x);
    console.log(whichPage);
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
