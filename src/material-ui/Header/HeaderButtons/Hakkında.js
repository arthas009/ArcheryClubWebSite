import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
}));



export default function Hakkında() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
       <Grid className={classes.mainGrid} container spacing={3}>
         <div>
       <Typography
        color="green"
        noWrap
        key="TechnologyPageMainBody"
        variant="h4"
        className={classes.bodyClass}
       >
         Biz Kimiz ?
       </Typography>  
       <hr color="black"></hr>
       </div>
       </Grid>
       </Container>
    </React.Fragment>
  );
}
