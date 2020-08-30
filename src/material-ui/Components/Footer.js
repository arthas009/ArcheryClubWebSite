import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid, Card, Paper, CardContent, CardHeader } from '@material-ui/core';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import InstagramIcon from '@material-ui/icons/Instagram';
import Icon from '@material-ui/core/Icon';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CardActions from '@material-ui/core/CardActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';



function Copyright() {
  const classes = useStyles();

  return (
    <Typography className ={classes.typhoDown} variant="body2" color="textSecondary" align="center">
          <hr className={classes.yatayCizgi} />
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Gazi Okçuluk Kulübü. Tüm Hakları Saklıdır.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      
    </Typography>
  );
}
const footers = [
  {
    title: 'İletişim',
    description: ['Gazi Okçuluk Kulubü', '+90 546 457 72 59', 'A Mah. B Bul. No: C/D. Ankara.'],
  },
  {
    title: 'Hakkında',
    description: ['Biz Kimiz ?', 'Misyonumuz & Vizyonumuz', 'Tarihçe'],
  },
  {
    title: 'Harita',
    description: [],
  },
  {
    title: 'Sosyal Medya Hesaplarımız',
    description: [<Button><InstagramIcon fontSize="small" /> Instagram</Button>, <Button><FacebookIcon fontSize="small" />Facebook</Button>,<Button><TwitterIcon fontSize="small" />Twitter</Button>],
  },
];
const useStyles = makeStyles((theme) => ({
 /* footer: {
    marginTop: theme.spacing(20),
    padding: theme.spacing(2, 2),
    backgroundColor: 'rgba(200,200,200,.9)',
    bottom: 0,
  },*/
 /* typho:
  {
    marginTop: theme.spacing(2),
    color: "#000000",
  },
  typhoDown:
  {
    marginTop: theme.spacing(2),
    color: "#000000",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'rgba(200,200,200,.9)',
  },*/

    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(2),

    },    
  
  
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },   
    footer: {
      //borderTop: `5px solid ${theme.palette.divider}`,
      borderBottom: `5px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      marginLeft:theme.spacing(0),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      backgroundColor: 'rgba(0,0,0,.8)',
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    }, 
    bosluk: {
      marginLeft:theme.spacing(2),
    },
     yatayCizgi:
     {
       width: '50%',
     },
     yukarıBosluk:
     {
      marginTop:theme.spacing(25),
     },
     footerGrid:
     {
      backgroundColor: 'rgba(210,210,210,1)',
     }
}));

export default function Footer(props) {
  const classes = useStyles();
  //const { description, title } = props;

  return (
    <React.Fragment>
       <hr className={classes.yukarıBosluk}></hr>
        <Grid className={classes.footerGrid} container spacing={4} justify='center' align='center'>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <hr className={classes.yatayCizgi}></hr>
              <ul align="left" type='none'> 
                {footer.description.map((item) => (
                  <grid align="left">
                  <li key={item} align="left">
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                  </grid>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        </React.Fragment>
  );
}
Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
