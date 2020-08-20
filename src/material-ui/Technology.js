import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import ResponsiveDrawer from './ResponsiveDrawer.js';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
}));



export default function Technology() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
       <ResponsiveDrawer></ResponsiveDrawer> 
       <Grid container spacing={3}>
       <Typography
        color="green"
        noWrap
        key="TechnologyPageMainBody"
        variant="body2"
        className={classes.bodyClass}
       >
        This is an Example Typography;
        <br />
        To add more definition here, please contact with your developer.
       </Typography>
       </Grid>
      </Container>
    </React.Fragment>
  );
}
