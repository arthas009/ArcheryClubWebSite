import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
}));



export default function Iletisim() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
       <Grid container spacing={3}>
       <Typography
        color="green"
        noWrap
        key="İletisimPageMainBody"
        variant="body2"
        className={classes.bodyClass}
       >
           
        İletisim
       </Typography>
       </Grid>
    </React.Fragment>
  );
}
