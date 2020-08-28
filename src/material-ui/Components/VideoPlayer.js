import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Typography from '@material-ui/core/Typography';
import {Grid,Button} from '@material-ui/core/';
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
  const [currentState,setCurrentVideoState] = React.useState("Stopped");

  const changeCurrentState = () => {
    if(currentState === "Stopped")
    setCurrentVideoState("Playing");
    else
    setCurrentVideoState("Stopped");
  }

  if(currentState === "Playing")
  return (
            <Grid> 
            <Button onClick={() => changeCurrentState()}> Start/Stop</Button>
            <ReactPlayer  
               style={{ height: '5%' }}

            url={url}
            playing 
            controls = {true}
            />
                   

            </Grid>
  );
  else
  {
    return (
      <Grid> 
        <Button onClick={() => changeCurrentState()}> Start/Stop</Button>
        <ReactPlayer 
        style={classes.videoPlayer}
        url={url}
        controls = {true}
         />
                 </Grid>

);
  }
}

VideoPlayer.propTypes = {
  post: PropTypes.object,
};
