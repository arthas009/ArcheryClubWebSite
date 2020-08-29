import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Farklı Bilgiler',
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
  yatayCizgi: {
    width: '50%',
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
export default function FarklıBilgiler() {
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
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">Faklı BİLGİLER</Typography>
            </ThemeProvider>
            </Box>
            <hr className={classes.yatayCizgi} />

        </Grid>
       <Grid container spacing={3}>
      
       </Grid>
       </Container>
    </React.Fragment>
  );
}
