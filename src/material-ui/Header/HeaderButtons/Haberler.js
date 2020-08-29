import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CollapseableCard from '../../Components/CollapseableCard';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Haberler',
  description:
    "",
  image: 'https://wallpapercave.com/wp/WJrXzyI.jpg',
  btnName: '',
  btnUrl: '',
}
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  yatayCizgi: {
    width: '50%',
  },
}));
const themeTypography = createMuiTheme({
  typography: {
    overline: {
      fontSize: 25,
      fontStyle: 'underline',
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});
const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / Haberler',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];
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
  if (news == undefined) {
    return (
      <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }   
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">Haberler</Typography>
            </ThemeProvider>
            </Box>
            <hr className={classes.yatayCizgi} />
          </Grid>
        </Container>
        </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }  
        <Container>
          <Grid><Box className={classes.pageHeader}>
          <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">Haberler</Typography>
            </ThemeProvider>
          </Box>
          <hr className={classes.yatayCizgi} />

          </Grid>

          <Grid className={classes.mainGrid} container spacing={4}>
            {news.News.New.map((post) => (
              <CollapseableCard key={post.haberBasligi} post={post} />
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  );



}
