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

const ImageList = [
  {
    id: 1,
    src: "https://i.pinimg.com/originals/6a/a5/ad/6aa5adeecdacef3978628080a0555d8a.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/proxy/cXaM7rP2l4KPjipOe4JD-NqGK7wyXXQ7hmCQfRs2NDMyiWoH1zXUANWfwU3PnxxVZ2nuvqZU48mE8isMA1Mz01ZEzmDdsqztUnM",
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

export default function Klübümüz() {
  const classes = useStyles();

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
       <PhotoGalleryComponent ImageList={ImageList}> 

        </PhotoGalleryComponent>
       </Grid>
       </Container>
    </React.Fragment>
  );
}
