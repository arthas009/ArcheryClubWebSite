import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    justifyContent: 'center',
    align: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
      height: 300,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      paddingRight: 0,
      height: 200,
    },
    
  },
 
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
        <Grid>
          <div className={classes.mainFeaturedPostContent}>
            <Typography className={classes.primaryTyphography} align="center" variant="h5" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography className={classes.secondaryTyphography} align="center" variant="h7" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Typography align="center" variant="h7" color="inherit" paragraph>
              <Button variant="outlined" color="inherit">
                 {post.title == "Hedefi olmayan sporcu, rehberi olmayan gezgin gibidir" ? "İLETİŞİM":""}
              </Button>
            </Typography>
          </div>
        </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
