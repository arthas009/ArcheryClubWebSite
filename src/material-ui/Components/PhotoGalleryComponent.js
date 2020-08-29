import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import { Container, Paper,Dialog,Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import VideoPlayer from "./VideoPlayer";
const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
  },
  root: {

  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  gridListTile:
  {
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {

    },
  },
  PhotoDialog:
  {
    maxHeight: '120px',
    maxWidth: '120px'
  },

}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhotoGalleryComponent(props) {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = React.useState(null);
  const [value, setValue] = React.useState([]);
  const { category, cols, ImageList, VideoList } = props;
  const handleClickOpen = tile => {
    setSelectedTile(tile);
    console.log("clicked");
    console.log(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

  if (category === "Fotoğraflar") {
    return (
      <Container>
        <GridList cols={cols}>
          className={classes.gridList}

          {ImageList.map(tile => (
            <GridListTile className={classes.gridListTile} key={tile.id}>
              <img onClick={() => handleClickOpen(tile)} src={tile.src} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Ekleyen: {tile.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        <Grid>
        <Dialog
          fullScreen
          open={selectedTile !== null}
          onClose={handleClose}
          TransitionComponent={Transition}
        >

          {selectedTile && (
            <Paper onClick={handleClose} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${selectedTile.src})` }}>
              {/* Increase the priority of the hero background image */}
            </Paper >

          )}

        </Dialog>
        </Grid>
        </Container>
    );
  }
  else if (category === "Videolar") {
    return (
      <Container>

        <GridList cols={cols}>
          className={classes.gridList}

          {VideoList.map(tile => (
            <GridListTile key={tile.id}>
              <VideoPlayer playing = {true} url={tile.src} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Ekleyen: {tile.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        <Dialog
          fullScreen
          open={selectedTile !== null}
          onClose={handleClose}
          TransitionComponent={Transition}
        >

          {selectedTile && (
            <Container>
              <Grid>
            <Paper onClick={handleClose} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${selectedTile.src})` }}>
              {/* Increase the priority of the hero background image */}
            </Paper >
            </Grid>
            </Container>
          )}

        </Dialog>
        </Container>

    );
  }
}

PhotoGalleryComponent.propTypes = {
  ImageList: PropTypes.object,
};