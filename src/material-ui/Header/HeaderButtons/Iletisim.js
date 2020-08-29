import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import CustomGoogleMapWithMarker from "../../Components/CustomGoogleMapWithMarker";





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
    marginTop: theme.spacing(2),
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
}));

 


export default function Iletisim() {
  const classes = useStyles();
 

  return (
    <React.Fragment>
    <CssBaseline />
    <Container>
    <Grid className={classes.heaederGrid}>
        <Box className={classes.pageHeader}>
          <Typography variant="h3" color="textPrimary">İletişim</Typography>
        </Box>
        <hr className={classes.yatayCizgi} />
      </Grid>
      <Grid className={classes.mainGrid}>

        <div>
          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h4"
            className={classes.bodyClass}
          >
            Gazi Okçuluk Kulubü
   
     </Typography>
          
          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h6"
            className={classes.bodyClass}
          >
            +90 546 457 72 59
   
     </Typography>
        </div>
        

          <Typography
            noWrap
            key="TechnologyPageMainBody"
            variant="h6"
            className={classes.bodyClass}
          >
            A Mah. B Bul. No: C/D. Ankara.
            
     </Typography>
        
     
      </Grid>
      
    </Container>
    <div><CustomGoogleMapWithMarker /> </div>
  </React.Fragment>
  );
  }
