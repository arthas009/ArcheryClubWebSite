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
          <hr />
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
    description: ['Gazi Okçuluk Kulubü', '+90 546 457 72 59', 'A Mah. B Bul. No: C/D. Ankara.', 'Locations'],
  },
  {
    title: 'Hakkında',
    description: ['Biz Kimiz ?', 'Misyonumuz & Vizyonumuz', 'Tarihçe', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Harita',
    description: ['Google Maps', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Sosyal Medya Hesaplarımız',
    description: [<Button><InstagramIcon fontSize="small" /></Button>, <Button><FacebookIcon fontSize="small" /></Button>,<Button><TwitterIcon fontSize="small" /></Button>],
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
    marginLeft:theme.spacing(300),

    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(2),

    },    
  
  
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },   
    footer: {
      borderTop: `5px solid ${theme.palette.divider}`,
      borderBottom: `5px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      marginLeft:theme.spacing(0),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      backgroundColor: 'rgba(200,200,200,.9)',
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    }, 
    bosluk: {
      marginLeft:theme.spacing(2),

    },
  
}));

export default function Footer(props) {
  const classes = useStyles();
  //const { description, title } = props;

  return (
    <React.Fragment>
      <hr></hr>
      <bosluk className={classes.bosluk}>
        <Grid container spacing={4} justify='center' align='center'>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul align="center" type='none'>
                {footer.description.map((item) => (
                  <grid align="center">
                  <li key={item} align="center">
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
        </bosluk>
        </React.Fragment>
  );
}
Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
