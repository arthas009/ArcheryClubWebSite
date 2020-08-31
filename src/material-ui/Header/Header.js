import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Popover } from '@material-ui/core';
import { Grid, ButtonGroup, Box } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  toolbar: { //üst çizgi
    overflowX: 'auto',
    height: 'auto',
    borderBottom: `1px solid gray`,
  },
  toolbarTitle: {
    marginLeft: theme.spacing(1),
    color:'blue',

  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    overflowX: 'auto',
    color: 'black',
  },
  menuButton:
  {
    border: '1px solid gray',
  },
  flexGrid: {
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
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(1),
    // marginRight:theme.spacing(50)
  },
  /*ButtonGroup: {
    marginLeft:theme.spacing(50),
    marginLeft: theme.spacing(3),
  },*/


}));



export default function Header(props) {
  const classes = useStyles();
  const {sections} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const CustomLink = props => <Link to={"/" + props.name} {...props}></Link>;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
        <Grid className={classes.flexGrid}
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          >
          <Grid
              alignItems="flex-start">
            <Box display={{ xs: 'none', md: 'inline' }}>
              <PhoneIcon fontSize="small" />
              
              <Link 
                
                color="inherit"
                className={classes.toolbarTitle}
              >
                +90 546 457 72 59
               </Link>
               </Box>
               <Box display={{ xs: 'none', md: 'inline' }}>

              <EmailIcon className={classes.emailIcon} fontSize="small" />
              <Link
               
                color="inherit"
                className={classes.toolbarTitle}
              >
                yusufalti1997@gmail.com
               </Link>
            </Box>
          </Grid>
          
          <Grid alignItems="flex-start"
> 
            <ButtonGroup variant="text" color="black">
              <Button><TwitterIcon fontSize="small" /></Button>
              <Button><FacebookIcon fontSize="small" /></Button>
              <Button><InstagramIcon fontSize="small" /></Button>
            </ButtonGroup>
          </Grid>

        </Grid>

      </Toolbar>

      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          /* Galeriyse farklı bir buton, değilse farklı bir buton yapısı oluşacak */
          <div>
            {section.title === "Galeri" ? <div><Button
              color="inherit"
              key={section.title}
              variant="body2"
              className={classes.menuButton}
              onClick={handlePopoverOpen}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              endIcon={<ArrowDropDownIcon />}
            >
              {section.title}
            </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                {/* onClick eventleri aynı anda 2 iş yapacağı için özel isimlerle butonlara özel oluşturulması gerekti */}
                <ButtonGroup orientation="vertical"
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text">
                  {section.subtitles.map((subsection) => (
                    <Button
                      component={CustomLink}
                      color="inherit"
                      name={"Galeri/" + subsection.url}
                      key={"Klubumuz"}
                      variant="body2"
                      className={classes.menuButton}
                      onClick={handlePopoverClose}
                    >
                      {subsection.title}
                    </Button>

                  ))}
                </ButtonGroup>
              </Popover>
            </div>
              :
              <Button
                component={CustomLink}
                name={section.url}
                color="inherit"
                key={section.title}
                variant="body2"
                className={classes.menuButton}

              >
                {section.title}
              </Button>

            }

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
