import React from 'react';
import { useState } from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Typography,ThemeProvider } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FeaturedPost from '../../Components/FeaturedPost';
import SwipeableContent from '../../Components/SwipeableContent';
import VideoPlayer from '../../Components/VideoPlayer';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(8),
    justifyContent: "space-between",
  },
  heaederGrid:
  {
    marginTop: theme.spacing(5),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
}));
const themeTypography = createMuiTheme({
  typography: {
    overline: {
      fontSize: 25,
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});
const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
 /* {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },*/
];
export default function MainPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <SwipeableContent></SwipeableContent> 

        <Container>
        <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">GAZİ Okçuluk</Typography>
            </ThemeProvider>
            </Box>
            <hr/>

          </Grid>
         
          <Grid container className={classes.mainGrid}>
          {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
         
        </Container>

    </React.Fragment>
  );



}
