import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  girisButon:
  {
    marginRight:2
  },
  typography: {
    padding: theme.spacing(2),
  },
}));


const featuredPosts = 
  {
    title: 'Haber 1',
    date: 'Ağustos 2020',
    description:
      'Yarışmada ilk 3\'e giren sporcularımız',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkTextt: 'Okumaya Devam Et..'
  }
export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const andleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { sections, title , handleClick } = props;

  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <h1 size="small"></h1>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={andleClick}>        
          Giriş Yap
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
        <Button name="kayit_buton" variant="outlined" size="small">
          Kayıt Ol
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (        
          <Button 
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            className={classes.toolbarLink}
            onClick = {() => handleClick(section.title)}
          >
            {section.title}
          </Button>         
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
