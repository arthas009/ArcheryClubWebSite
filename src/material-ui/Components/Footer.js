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

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(20),
    padding: theme.spacing(2, 2),
    backgroundColor: 'rgba(200,200,200,.9)',
    bottom: 0,
  },
  typho:
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
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundColor: 'rgba(200,200,200,.9)',
  },
    marginLeft:theme.spacing(15),

    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(20),

    },    
  
  
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },    
  
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <hr></hr>
      <Grid container spacing={3}>
      <Grid item xs={3} xl={3}>
          <Paper className={classes.paper}><h4>İletişim</h4>
          <hr className={classes.yatayCizgi} />
          <h5>Gazi Okçuluk Klübü</h5>
          <h5>+90 546 457 72 59</h5>
          <h5>A Mah. B Bul. No: C/D. Ankara.</h5></Paper>
          
        </Grid>
        <Grid item xs={3} xl={3}>
          <Paper className={classes.paper}><h4>Hakkında</h4>
          <hr className={classes.yatayCizgi} />
          <h5>Biz Kimiz ?</h5>
          <h5>Misyonumuz & Vizyonumuz</h5>
          <h5>Tarihçe</h5></Paper>
        </Grid>
        <Grid item xs={3} xl={3}>
          <Paper className={classes.paper}><h4>Harita</h4>
          <hr className={classes.yatayCizgi} />
          <h5>Google Maps</h5>
          <h5>+90 546 457 72 59</h5>
          <h5>A Mah. B Bul. No: C/D. Ankara.</h5></Paper>
        </Grid>
        <Grid item xs={3} xl={3}>
          <Paper className={classes.paper}><h4>Takip Ediyor Musunuz ?</h4>
          <hr className={classes.yatayCizgi} />
          <Button><TwitterIcon fontSize="small" /></Button>
        <Button><FacebookIcon fontSize="small" /></Button>
        <Button><InstagramIcon fontSize="small" /></Button><h5>.</h5>
          <h5>.</h5>
        </Paper>
        
        </Grid>
      </Grid>
        <Copyright />
    </footer>
  );
}
Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
