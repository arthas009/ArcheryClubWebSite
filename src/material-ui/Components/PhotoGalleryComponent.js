import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Container,Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    border: "1px solid #000000",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "auto",
    height: "auto"
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
  const { cols, ImageList } = props;
  const handleClickOpen = tile => {
    setSelectedTile(tile);
    console.log("clicked");
    console.log(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };
  return (
    <div className={classes.root}>
      <GridList cols={cols}>
        className={classes.gridList}
        
        {ImageList.map(tile => (
          <GridListTile key={tile.id}>
            <img onClick={() => handleClickOpen(tile)} src={tile.src} alt={tile.title} />
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
          <Paper onClick={handleClose} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${selectedTile.src})` }}>
          {/* Increase the priority of the hero background image */}
          </Paper >
          
        )}

      </Dialog>
    </div>


  );
}

PhotoGalleryComponent.propTypes = {
  ImageList: PropTypes.object,
};