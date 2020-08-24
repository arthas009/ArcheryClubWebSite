import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid} from '@material-ui/core';
import {Container} from '@material-ui/core';

import FeaturedPost from '../../Components/FeaturedPost';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function MainPage(props) {
  const classes = useStyles();
  const { news } = props;
  if(news === undefined)
  {
    return <div></div>;
  }
  
    return (
    <React.Fragment>
      <CssBaseline /> 
      <Container>
        <main>
          <Grid container spacing={3}>
            {news.News.New.map((post) => (
              <FeaturedPost key={post.haberBasligi} post={post} />
            ))}
          </Grid>
        </main>
        </Container>
    </React.Fragment>
  );
  
  
    
}
