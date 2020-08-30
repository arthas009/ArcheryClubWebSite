import React from "react";
import { makeStyles,createMuiTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Box, Typography, Dialog, Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import VideoPlayer from "./VideoPlayer";
const useStyles = makeStyles(theme => ({
    gridListTile:
    {
        [theme.breakpoints.up('md')]: {
            height: '550px !important',
        },
        [theme.breakpoints.down('md')]: {
            height: '150px !important',
        },
    },
    typography:
    {
      margin:theme.spacing(2),
    }
}));
const themeTypography = createMuiTheme({
    typography: {
      overline: {
        fontSize: 25,
        //textDecorationLine: 'underline'
      },
      body1: {
        fontWeight: 500,
      },
    },
  });
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoGalleryComponent(props) {
    const classes = useStyles();
    const { VideoList } = props;

    return (
            <GridList cols={1}>      
                {VideoList.map(tile => (
                    <GridListTile className={classes.gridListTile} key={tile.id}>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center">
                            <Box>
                            <VideoPlayer playing={true} url={tile.src} />
                            </Box>
                            <Typography theme={themeTypography} variant='overline'> {tile.author} </Typography>
                            
                        </Grid>
<hr></hr>
                    </GridListTile>
                ))}
            </GridList>

    );

}

VideoGalleryComponent.propTypes = {
    ImageList: PropTypes.object,
};