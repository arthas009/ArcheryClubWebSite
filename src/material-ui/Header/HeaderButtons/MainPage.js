import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FeaturedPost from '../../Components/FeaturedPost';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
}));


export default function MainPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Container>
        <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
              <Typography variant="h3" color="textPrimary">Gazi Okçuluk Klübü</Typography>
            </Box>
          </Grid>
          <Grid container className={classes.mainGrid}>

          </Grid>
        </Container>

    </React.Fragment>
  );



}
