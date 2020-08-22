import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import MainFeaturedPost from '../../MainFeaturedPost';
import FeaturedPost from '../../FeaturedPost';
import Main from '../../Main';
import Sidebar from '../../Sidebar';
import ResponsiveDrawer from '../../ResponsiveDrawer.js';
import Footer from '../../Footer';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
}));



export default function Sporcularımız() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
       <Grid container spacing={3}>
       <Typography
        color="green"
        noWrap
        key="TechnologyPageMainBody"
        variant="body2"
        className={classes.bodyClass}
       >
           
        Madalyalar
       </Typography>
       </Grid>
    </React.Fragment>
  );
}
