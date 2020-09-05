import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography, Box} from '@material-ui/core';
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
    src: "./Images/Klubumuz1.jpg",
    title: "Yarışma afişi",
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
    src: "https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 5,
    src: "https://n11scdn.akamaized.net/a1/450/ev-yasam/hediyelik-esya/toplu-madalya-toren-madalyalari-basari-madalyasi-odul-madalya__1257335020123086.jpg",
    title: "2. yarışma madalyası",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 6,
    src: "https://www.denizpostasi.com/images/stories/2019/Eyl%C3%BCl/AW795159_01.jpg",
    title: "3. Yarışma madalya sahipleri",
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
    src: "./Images/Yarisma1.jpg",
    title: "1. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 2,
    src: "./Images/Yarisma2.jpg",
    title: "2. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 3,
    src: "./Images/Yarisma3.jpg",
    title: "3. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 4,
    src: "./Images/Yarisma4.jpg",
    title: "4. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 5,
    src: "./Images/Yarisma5.jpg",
    title: "5. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 6,
    src: "./Images/Yarisma6.jpg",
    title: "6. Yarışma",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 7,
    src: "./Images/Yarisma7.jpg",
    title: "7. Yarışma",
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
    src: "./Images/Sporcularimiz1.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 5,
    src: "./Images/Sporcularimiz2.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 6,
    src: "./Images/Sporcularimiz3.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 7,
    src: "./Images/Sporcularimiz4.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 8,
    src: "./Images/Sporcularimiz5.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 9,
    src: "./Images/Sporcularimiz6.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 10,
    src: "./Images/Sporcularimiz7.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 11,
    src: "./Images/Sporcularimiz8.jpg",
    title: "",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 12,
    src: "./Images/OguzhanPolat3.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 13,
    src: "./Images/OguzhanPolat4.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 14,
    src: "./Images/OguzhanPolat5.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 15,
    src: "./Images/OguzhanPolat6.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
  {
    id: 16,
    src: "./Images/OguzhanPolat7.jpg",
    title: "Oğuzhan Polat",
    description: "bar",
    author: "Gazi Okçuluk"
  },
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
  // Category to show, images or videos
  const [category, setCategory] = React.useState("Fotoğraflar");
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }


  const { section, ImagesList } = props;

  ImagesList.Image.map((post) => (
     console.log(post)
  ))
 
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
