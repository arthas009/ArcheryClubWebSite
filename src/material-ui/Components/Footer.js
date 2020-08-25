import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid, Card, Paper, CardContent, CardHeader } from '@material-ui/core';

function Copyright() {
  const classes = useStyles();

  return (
    <Typography className ={classes.typhoDown} variant="body2" color="textSecondary" align="center">
          <hr />
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Gazi Okçuluk Klübü. Tüm Hakları Saklıdır.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 0),
    backgroundColor: 'rgba(200,200,200,.9)',
    bottom: 0,
  },
  typho:
  {
    marginTop: theme.spacing(1),
    color: "#000000",
  },
  typhoDown:
  {
    marginTop: theme.spacing(3),
    color: "#000000",
  },
  card:
  {
    display: 'flex',
    backgroundColor:'inherit',
    [theme.breakpoints.up('lg')]: {
      marginLeft:theme.spacing(25),
    },
    marginLeft:theme.spacing(15),

    [theme.breakpoints.down('md')]: {
      marginLeft:theme.spacing(2),

    },    
  },
  cardDetails: {
    flex: 1,
    backgroundColor:'inherit',
  },
  cardContent: {
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    [theme.breakpoints.up('md')]: {
      width: '18rem',
      marginLeft:theme.spacing(3),
      overflow:'auto',
    },
  
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },    
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
        <Grid container spacing={1} xs={12} xl= {12}>
        <Card className={classes.card}>
          <CardHeader
            subheader="İletişim" />
          <CardContent className={classes.cardContent}>
          <Typography className ={classes.typho} variant="h6" align="left">Gazi Okçuluk Klübü</Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left"> +90 546 457 72 59</Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left">A Mah. B Bul. No: C/D. Ankara. </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
        <CardHeader
            subheader="Hakkında" />
        <CardContent className={classes.cardContent}>
          <Typography className ={classes.typho} variant="h6" align="left">Biz Kimiz ?</Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left">Misyonumuz & Vizyonumuz</Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left">Tarihçe</Typography>
        </CardContent>
        </Card>

        <Card className={classes.card}>
        <CardHeader
            subheader="Harita" />
        <CardContent className={classes.cardContent}>
          <Typography className ={classes.typho} variant="h6" align="left"> Google Maps</Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left"></Typography>
          <Typography className ={classes.typho} display="block" variant="h7" align="left"></Typography>
        </CardContent>
        </Card>
        </Grid>


        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
