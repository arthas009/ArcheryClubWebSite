import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, ThemeProvider } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SatınAl from '../../Components/SatınAl';



const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Kulubü / 2. El Malzemeler',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];
const iletisim_itemleri = [
  {
    title: [<LocationOnIcon  fontSize="small" />,'Adres'],
    description: ['Gazi Okçuluk Kulubü', 'A Mah. B Bul. No: C/D. .', 'Etimesgut/Ankara'],
  },
  {
    title: [<PhoneIcon  fontSize="small" />,'Telefon & Fax'],
    description: ['+90 546 457 72 59', '+90 312 999 99 99'],
  },
  {
    title: [<EmailIcon  fontSize="small" />,'Mail'],
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


export default function IkinciElMalzemeler() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }<Grid>
      <Grid className={classes.heaederGrid}>
        <Box className={classes.pageHeader}>
          <ThemeProvider theme={themeTypography}>
            <Typography variant="overline" color="textPrimary">2. El Malzemeler</Typography>
          </ThemeProvider>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>


     
        
      </Grid>
    
    </React.Fragment>
  );
}
