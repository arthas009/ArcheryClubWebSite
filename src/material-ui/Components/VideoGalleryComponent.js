import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Container, Paper, Dialog, Grid } from "@material-ui/core";
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
}));

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
                            <VideoPlayer playing={true} url={tile.src} />
                        </Grid>
                    </GridListTile>
                ))}
            </GridList>

    );

}

VideoGalleryComponent.propTypes = {
    ImageList: PropTypes.object,
};