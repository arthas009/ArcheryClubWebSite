import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../../Components/FeaturedPost';
import { Typography } from '@material-ui/core';
import {Box} from '@material-ui/core';
import {Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  pageHeader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    overflowX: 'auto',
  },
}));

const featuredPosts = [
  {
    haberBasligi: 'Haber 1',
    haberTarihi: 'Ağustos 2020',
    haberIcerigi:
      'Yarışmada ilk 3\'e giren sporcularımız',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkTextt: 'Okumaya Devam Et..'
  },
  {
    haberBasligi: 'Haber 2',
    haberTarihi: 'Haziran 2020',
    haberIcerigi:
    'Türkiyenin en değerli klübü seçildik !',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkTextt: 'Okumaya Devam Et..'
  },
];

export default function Haberler(props) {
  const classes = useStyles();
  const { news } = props;
  if(news == undefined)
  {
    return <div></div>;
  }
  
    return (
    <React.Fragment>
      <CssBaseline /> 
        <main>
          <Container>
            <Box className={classes.pageHeader}>
            <Typography variant="h3" color="textPrimary">Haberler</Typography>
            </Box>
            </Container>
            <Grid className = {classes.mainGrid} container spacing={3}>
            {news.News.New.map((post) => (
              <FeaturedPost key={post.haberBasligi} post={post} />
            ))}
          </Grid>
        </main>
    </React.Fragment>
  );
  
  
    
}
