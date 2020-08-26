import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Popover } from '@material-ui/core';
import { Grid, Avatar, ButtonGroup } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CallIcon from '@material-ui/icons/Call';

/*
* Header, BlogHeaderComponent tarafından renderleniyor. Dışardan aldığı json bilgileri üzerine ikinci toolbar ögesi üzerinde
* menü butonları oluşturmaktan sorumlu. İlk toolbar ögesinde ise iletişim ve sosyal medya hesaplarının bilgilerini koymayı
* planladık. Bu durum değişebilir.

*/


const useStyles = makeStyles((theme) => ({
  toolbar: { //üst çizgi
    justifyContent: 'left',
    overflowX: 'auto',
    height: 50,
    borderBottom: `1px solid gray`,
  },
  toolbarTitle: {
    marginLeft: theme.spacing(1),

  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    overflowX: 'auto',
    color: 'black',

  },
  menuButton:
  {

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
  phoneIcon: {
    marginLeft: theme.spacing(0),

  },
  emailIcon: {
    marginLeft: theme.spacing(3),
    // marginRight:theme.spacing(50)
  },
  ButtonGroup: {
    marginLeft: theme.spacing(50),
    marginLeft: theme.spacing(3),
  },
  solaGidecekOlanlar:
  {

  },
  sagaGidecekOlanlar:
  {

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
  const handlePopoverCloseMadalyalar = () => {
    setAnchorEl(null);
    handleClick("Madalyalar");
  };
  const handlePopoverCloseSporcularımız = () => {
    setAnchorEl(null);
    handleClick("Sporcularımız");
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  /* h1 is used to display data on top left side of page */
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
        <Grid>
          <div className={classes.solaGidecekOlanlar}>
            <PhoneIcon fontSize="small" />
            <PhoneIcon fontSize="small" />
            <Typography
              component="h8"
              variant="body2"
              color="inherit"
              className={classes.toolbarTitle}
            >
              +90 546 457 72 59
        </Typography>
            <EmailIcon className={classes.emailIcon} fontSize="small" />
            <Typography
              component="h8"
              variant="body2"
              color="inherit"
              className={classes.toolbarTitle}
            >
              yusufalti1997@gmail.com
        </Typography>
          </div>

          <div className={classes.sagaGidecekOlanlar}>
            <ButtonGroup variant="text" color="black" aria-label="text primary button group">
              <Button><TwitterIcon fontSize="small" /></Button>
              <Button><FacebookIcon fontSize="small" /></Button>
              <Button><InstagramIcon fontSize="small" /></Button>
            </ButtonGroup>
          </div>
        </Grid>

      </Toolbar>

      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          /* Galeriyse farklı bir buton, değilse farklı bir buton yapısı oluşacak */
          <div>
            {section.title == "Galeri" ? <div><Button
              color="inherit"
              noWrap
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
                  <Button
                    color="inherit"
                    noWrap
                    key={"Madalyalar"}
                    variant="body2"
                    className={classes.menuButton}
                    onClick={handlePopoverCloseMadalyalar}
                  >
                    Madalyalar
            </Button>
                  <Button
                    color="inherit"
                    noWrap
                    key={"Sporcularımız"}
                    variant="body2"
                    className={classes.menuButton}
                    onClick={handlePopoverCloseSporcularımız}
                  >
                    Sporcularımız
            </Button>
                </ButtonGroup>
              </Popover>
            </div>
              :
              <Button
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                className={classes.menuButton}
                onClick={() => handleClick(section.title)}
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
