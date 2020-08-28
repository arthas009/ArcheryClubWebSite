import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
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

const MadalyalarImageList = [
  {
    id: 1,
    src: "https://n11scdn.akamaized.net/a1/450/spor-outdoor/kupa-ve-madalya/madalya-1-adet-altin-gumus-bronz-renk__1427895175396524.jpeg",
    title: "1. yarışma madalyası",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "https://miro.medium.com/max/3000/1*bHf1bqIQEJmtRDnuxVPdfg.jpeg",
    title: "Saplanmış Ok",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 3,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "Ok atan adam",
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
  {
    id: 6,
    src: "images/sunset_road.jpg",
    title: "Sunset_Road",
    description: "bar",
    author: "Sudhanshu"
  },
  {
    id: 5,
    src: "images/bridge.jpg",
    title: "Sunset on the Bridge",
    description: "bar",
    author: "Dabang"
  },
  {
    id: 5,
    src: "images/fire.jpg",
    title: "Fire",
    description: "bar",
    author: "Komali"
  },
  {
    id: 5,
    src: "images/set.jpg",
    title: "Set",
    description: "bar",
    author: "CCV"
  }
];


export default function Madalyalar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Container>
          <Grid className={classes.heaederGrid}>
            <Box className={classes.pageHeader}>
              <Typography variant="h3" color="textPrimary">Madalyalar</Typography>
            </Box>
        </Grid>
        <Grid className={classes.mainGrid} container spacing={3}>
        <PhotoGalleryComponent ImageList={MadalyalarImageList}> 

        </PhotoGalleryComponent>
       </Grid>
       </Container>
    </React.Fragment>
  );
}
