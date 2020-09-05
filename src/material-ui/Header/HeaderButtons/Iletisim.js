import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, ThemeProvider, Container } from '@material-ui/core';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


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
    title: ['Adres'],
    icon: [<LocationOnIcon fontSize="small" />],
    description: ['Gazi Okçuluk Kulubü', 'A Mah. B Bul. No: C/D. .', 'Etimesgut/Ankara'],
  },
  {
    title: ['Telefon & Fax'],
    icon: [<PhoneIcon fontSize="small" />],
    description: ['+90 546 457 72 59', '+90 312 999 99 99'],
  },
  {
    title: ['Mail'],
    icon: [<EmailIcon fontSize="small" />],
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
    width: '75%',
  },
  yatayyCizgi: {
    width: '20%',
    align: 'left',
  },
  dikeyCizgi: {
    width: '1%',
    height: '100%'
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
  ustBosluk:
  {
    marginTop: theme.spacing(5),
  },
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(1),
    // marginRight:theme.spacing(50)
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
// <hr align="left" className={classes.yatayyCizgi} />

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

      <Container>
        <Grid className={classes.bodyClass} container spacing={2} direction="column" justify='flex-start' align='flex-start'>
          {iletisim_itemleri.map((iletisim_item) => (

            <Grid container direction="column" justify="flex-start"
              alignItems="flex-start" key={iletisim_item.title}>

              <Grid container direction="column"
                justify="flex-start"
                alignItems="flex-start" key={iletisim_item.title}>
                <Typography className={classes.ustBosluk} variant="h5" color="textPrimary" gutterBottom>
                  {iletisim_item.icon}{iletisim_item.title}
                </Typography>
                
               
               <Box  borderLeft={1}>
               
                <ul >
                {iletisim_item.description.map((item) => (
                  <Grid align="left">
                    
                    <li key={item} align="left" type = "none"  >
                      <Typography variant="subtitle1" color="textSecondary"> {item}</Typography>
                      
                    </li>
                    
                  </Grid>
                  
                ))}
                
              </ul>
              </Box>
              </Grid>
            </Grid>
           
            
          ))}
</Grid>
</Container>

    </React.Fragment>
  );
}
