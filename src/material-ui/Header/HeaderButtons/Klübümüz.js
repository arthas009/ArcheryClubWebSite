import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box,ButtonGroup } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import PhotoGalleryComponent from '../../Components/PhotoGalleryComponent';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  heaederGrid:
  {
    marginTop: theme.spacing(3),
  },
  bodyClass:
  {
    marginTop: theme.spacing(3),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
}));

const ImageList = [
  {
    id: 1,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 3,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 4,
    src: "https://n11scdn.akamaized.net/a1/450/ev-yasam/hediyelik-esya/toplu-madalya-toren-madalyalari-basari-madalyasi-odul-madalya__1257335020123086.jpg",
    title: "2. yarışma madalyası",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 4,
    src: "https://www.denizpostasi.com/images/stories/2019/Eyl%C3%BCl/AW795159_01.jpg",
    title: "3. Yarışma madalya sahipleri",
    description: "bar",
    author: "Gazi Okçuluk"
  },
];

export default function Klübümüz() {
  const classes = useStyles();
  const [view, setView] = React.useState(3);
  const handleChange = (nextViewCount) => {
    setView(nextViewCount);
    console.log(view);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid className={classes.heaederGrid}>
          <Box className={classes.pageHeader}>
            <Typography variant="h3" color="textPrimary">Klübümüz</Typography>
          </Box>
        </Grid>
        <Grid className={classes.mainGrid} container spacing={3}>
          <Grid>
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
              <ToggleButton value="list" aria-label="list" onClick={() => handleChange (1)}>
                <ViewListIcon />
              </ToggleButton>
              <ToggleButton value="module" aria-label="module" onClick={() => handleChange (3)}>
                <ViewModuleIcon />
              </ToggleButton>
            </ButtonGroup>
          </Grid>
          <Grid>
            <PhotoGalleryComponent cols = {view} ImageList={ImageList}>

            </PhotoGalleryComponent>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}
