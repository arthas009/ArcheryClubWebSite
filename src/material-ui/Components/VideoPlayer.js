import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

/*const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
    [theme.breakpoints.down('md')]: {
      bottom: 0,
    },
    display: 'inline',
  },
  cardContent: {
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    [theme.breakpoints.up('lg')]: {
      width: '25rem',
      overflow:'auto',
    },
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },    
  }
}));*/
const useStyles = makeStyles({
  card: {
    width: 1250,
    display: 'flex',
    height: 500,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 600,
  },
});

export default function VideoPlayer(props) {
  const classes = useStyles();
  const { playing, url } = props;

  if(playing)
  return (
            <ReactPlayer         
            url={url}
            playing />

    
  );
  else
  {
    return (
        <ReactPlayer         
        url={url}
         />


);
  }
}

VideoPlayer.propTypes = {
  post: PropTypes.object,
};
