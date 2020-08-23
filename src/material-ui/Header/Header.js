import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Popover } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: 70
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'center',
    padding: theme.spacing(2),
    overflowX: 'auto',
    backgroundColor: 'black',
    color: 'white',
    borderBottom: `1px solid ${theme.palette.divider}`,

  },
  menuButton:
  {
    background:'linear-gradient(45deg, #CC3040 30%, #BB5050 90%)',
    color: '#EEEE30',
    boxShadow: '0 5px 7px 4px rgba(92, 151, 211, .8)',
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  typography: {
    padding: theme.spacing(2),
  },
  logo: {
    maxWidth: 150,
    maxHeight: 90,
  },
  popover: {
    pointerEvents: 'none',
  },
}));



export default function Header(props) {
  const classes = useStyles();

  const { sections, title, handleClick } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
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
      </Toolbar>

      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <div>
            <Button
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              className={classes.menuButton}
              onClick={() => handleClick(section.title)}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              {section.title}
            </Button>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography>I use Popover.</Typography>
            </Popover>
          </div>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
