import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography, Box, ButtonGroup, FormControlLabel, Switch } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import MainFeaturedPost from '../../Components/MainFeaturedPost';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PhotoGalleryComponent from '../../Components/PhotoGalleryComponent';
import VideoGalleryComponent from '../../Components/VideoGalleryComponent';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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
  yatayCizgi: {
    width: '50%',
  },
  kategoriButonları: {
    margin: theme.spacing(.2),
  },
}));

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Galeri',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];
const themeTypography = createMuiTheme({
  typography: {
    overline: {
      fontSize: 25,
      //textDecorationLine: 'underline'
    },
    body1: {
      fontWeight: 500,
    },
  },
});
const KlübümüzImageList = [
  {
    id: 1,
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
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
  {
    id: 5,
    src: "./Images/Klubumuz1.jpg",
    title: "Yarışma afişi",
    description: "bar",
    author: "Gazi Okçuluk"
  },
];

const MadalyalarImageList = [
  {
    id: 1,
    src: "./Images/Madalya1.jpg",
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

];

const SporcularImageList = [
  {
    id: 1,
    src: "./Images/OguzhanPolat.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "./Images/OguzhanPolat1.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 3,
    src: "./Images/OguzhanPolat2.jpg",
    title: "Oğuzhan Polat",
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

const KlübümüzVideoList = [
  {
    id: 1,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
];

const MadalyalarVideoList = [
  {
    id: 1,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },{
    id: 1,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
];

const SporcularVideoList = [
  {
    id: 1,
    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
];

export default function Galeri(props) {
  const classes = useStyles();
  // Count of elements to display in per row
  const [view, setView] = React.useState(3);

  // Category to show, images or videos
  const [category, setCategory] = React.useState("Fotoğraflar");

  const handleChange = (nextViewCount) => {
    setView(nextViewCount);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }


  const { section } = props;
  let name = "";
  let objectToView = {};
  let videosToView = {};
  if (section === "Klubumuz") {
    name = "Klübümüz";
    objectToView = KlübümüzImageList;
    videosToView = KlübümüzVideoList;
  }
  else if (section === "Madalyalar") {
    name = "Madalyalar";
    objectToView = MadalyalarImageList;
    videosToView = MadalyalarVideoList;

  }
  else if (section === "Sporcularimiz") {
    name = "Sporcularimiz";
    objectToView = SporcularImageList;
    videosToView = SporcularVideoList;

  }
  return (
    <React.Fragment>
      <CssBaseline />
      {
        mainFeaturedPost.map((item, i) =>
          <MainFeaturedPost key={i} post={item} />
        )
      }
      <Container>
        <Grid className={classes.heaederGrid}>
          <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">{name}</Typography>
            </ThemeProvider>
          </Box>

          <hr className={classes.yatayCizgi} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
            <Button onClick={() => changeCategory('Fotoğraflar')} className={classes.kategoriButonları} variant="contained" color="primary">
              Fotoğraflar
            </Button>
            <Button onClick={() => changeCategory('Videolar')} className={classes.kategoriButonları} variant="contained" color="primary">
              Videolar
            </Button>
        </Grid>
        <Grid className={classes.mainGrid}>
            {category === "Fotoğraflar" ? 
            <PhotoGalleryComponent ImageList={objectToView} /> : 

            <VideoGalleryComponent VideoList={videosToView}/> }    
        </Grid>
      </Container>
    </React.Fragment>
  );
}
