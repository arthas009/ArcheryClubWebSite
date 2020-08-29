import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '@material-ui/core/Typography';
import { Grid, Button}from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({


});

export default function VideoPlayer(props) {
  const classes = useStyles();
  const { playing, url } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  if (matches)
    return (
      <Grid>
        <ReactPlayer

          width='550px'
          height='450px'
          url={url}
          controls={true}
        />

      </Grid>
    );
  else {
    return (
      <Grid>
        <ReactPlayer

          width='250px'
          height='150px'
          url={url}
          controls={true}
        />

      </Grid>
    );
  }
}

VideoPlayer.propTypes = {
  post: PropTypes.object,
};
