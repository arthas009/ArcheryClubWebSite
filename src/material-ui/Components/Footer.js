import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
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
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid spacing={4}>
        <Typography display="" variant="h6" align="left">
          <Typography variant="h7" align="left">İletişim</Typography>
          <Typography display="block" variant="h7" align="left"> +90 546 457 72 59</Typography>
          <Typography display="block" variant="h7" align="left">A Mah. B Bul. No: C/D. Ankara. </Typography>
        </Typography>

        <Typography display="" variant="h6" align="left">
          <Typography variant="h7" align="left">İletişim</Typography>
          <Typography display="block" variant="h7" align="left"> +90 546 457 72 59</Typography>
          <Typography display="block" variant="h7" align="left">A Mah. B Bul. No: C/D. Ankara. </Typography>
        </Typography>
    


        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
