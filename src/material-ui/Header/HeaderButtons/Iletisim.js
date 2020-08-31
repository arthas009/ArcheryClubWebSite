import React, { Component } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box, ThemeProvider } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import Link from '@material-ui/core/Link';


const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / İletişim',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];
const iletisim_itemleri = [
  {
    title: 'Adres',
    description: ['Gazi Okçuluk Kulubü', 'A Mah. B Bul. No: C/D. .', 'Etimesgut/Ankara'],
  },
  {
    title: 'Telefon & Fax',
    description: ['+90 546 457 72 59', '+90 312 999 99 99'],
  },
  {
    title: 'Mail',
    description: ['Gazi Okçuluk Kulubü.com'],
  },
]
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
    marginTop: theme.spacing(15),
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
  iletisim_item: {
    borderTop: `5px solid ${theme.palette.divider}`,
    borderBottom: `5px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(0),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: 'rgba(200,200,200,.9)',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  bosluk: {
    marginLeft: theme.spacing(2),

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
      <Grid className={classes.heaederGrid}>
        <Box className={classes.pageHeader}>
          <ThemeProvider theme={themeTypography}>
            <Typography variant="overline" color="textPrimary">İLETİŞİM</Typography>
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>
      <Grid className={classes.bodyClass} container spacing={2} justify='center' align='center'>
          {iletisim_itemleri.map((iletisim_item) => (
                  
            <Grid item xs={6} sm={3} key={iletisim_item.title}>
              <Box style={{padding:"10px"}}borderRadius="50%" border={1}>

              <Typography variant="h5" color="textPrimary" gutterBottom>
                {iletisim_item.title}
              </Typography>
              <hr className={classes.yatayCizgi}></hr>
              <ul align="left" type='none'>
                {iletisim_item.description.map((item) => (
                  <grid align="left">
                    <li key={item} align="left" >
                      <Typography variant="subtitle1" color="textSecondary"> {item}</Typography>

                    </li>
                  </grid>
                ))}
              </ul>
              </Box>
            </Grid>
            
          ))}
        

      </Grid>

    </React.Fragment>
  );
}
