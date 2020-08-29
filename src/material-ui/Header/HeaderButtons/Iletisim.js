import React, { Component } from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box,ThemeProvider } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';


const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / İletişim',
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
    marginTop: theme.spacing(2),
  },
  marginTopDiv:
  {
    marginTop: theme.spacing(5),
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


export default function Iletisim() {
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
              <Typography variant="overline" color="textPrimary">İLETİŞİM</Typography>
            </ThemeProvider>

          </Box>
          <hr className={classes.yatayCizgi} />
        </Grid>
      <Grid className={classes.mainGrid}>

        <div>
          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h4"
            className={classes.bodyClass}
          >
            Gazi Okçuluk Kulubü
   
     </Typography>
          
          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h6"
            className={classes.bodyClass}
          >
            +90 546 457 72 59
   
     </Typography>
        </div>
        

          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h6"
            className={classes.bodyClass}
          >
            A Mah. B Bul. No: C/D. Ankara.
            
     </Typography>
        
      </Grid>
      
    </Container>
    
  </React.Fragment>
  );
  }
