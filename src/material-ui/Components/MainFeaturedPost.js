import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      height: 300,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      height: 200,
    },
    
  },
  overlay: {

    backgroundColor: 'rgba(0,0,0,.3)',

  },
  primaryTyphography:
  {
    padding: theme.spacing(3),

  },
  mainFeaturedPostContent: {
    justifyContent: 'center',
  },

}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Grid container className={classes.mainFeaturedPostContent}>
        <div className={classes.overlay}>
          <Typography className={classes.primaryTyphography} align="center" variant="h5" color="inherit" gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.secondaryTyphography} align="center" variant="h7" color="inherit" paragraph>
            {post.description}
          </Typography>
        </div>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
