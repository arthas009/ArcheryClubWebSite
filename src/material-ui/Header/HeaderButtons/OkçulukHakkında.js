import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / OkçulukHakkında',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
}));

export default function OkçulukHakkında() {
  const classes = useStyles();

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
              <Typography variant="h3" color="textPrimary">Farklı Bilgiler</Typography>
            </Box>
        </Grid>
       <Grid container spacing={3}>
      
       </Grid>
       </Container>
    </React.Fragment>
  );
}
