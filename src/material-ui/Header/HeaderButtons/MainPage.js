import React from 'react';
//import { useState } from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Box, Typography,ThemeProvider, Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import FeaturedPost from '../../Components/FeaturedPost';
import SwipeableContent from '../../Components/SwipeableContent';
import GaziLogo from '../../Components/Logo';
//import GaziLogoImage from '../public/Images/GaziLogoImage.jpg';




const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop:theme.spacing(10),
    justifyContent: "space-between",
  },
  heaederGrid:
  {
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: "auto", 
    textOverflow: "ellipsis", 
    backgroundImage: `url(${"public/Images/GaziLogoImage.jpg"})`,
    [theme.breakpoints.up('lg')]: {
      width: '35rem',
    },
  },
  overflowEnabled:
 {
  overflow: "auto", 
  textOverflow: "ellipsis", 
 },
 
 
}));
/*const styles = {
  paperContainer: {
    backgroundImage: `url(${"ArcheryClubWebSite/public/Images/GaziLogoImage.jpg"})`
    
  },
};*/

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
const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
 /* {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },*/
];
export default function MainPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SwipeableContent></SwipeableContent> 

        <Container>
        <Grid className={classes.heaederGrid}>
          <Box className={classes.pageHeader}>
            <ThemeProvider theme={themeTypography}>
              <Typography variant="overline" color="textPrimary">GAZİ Okçuluk</Typography>
            </ThemeProvider>

          </Box>
          <hr/>
          </Grid>

          <Grid container className={classes.mainGrid}>

          {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
         
          <div className={classes.root}></div>
      <Grid container spacing={0}>
  
    <Grid item xs={6}>
          <Paper className={classes.paper} ><Typography className={classes.overflowEnabled} style={{ maxHeight:300, overflow:"auto" }} variant="subtitle1" paragraph color="inherit">
              Okçuluk. Kökeni insanoğlunun avcılık günlerine dayanan, oku bir yay aracılığıyla hedefe göndermeyi amaçlayan spor dalı.
               Okçuluk ilk kez 1904 Yaz Olimpiyatları'nda olimpik programa alınmış, 1972'den beri aralıksız olarak programlarda
                yer almaktadır. Bu branşta ilk dönemlerde Fransa, Belçika ve Büyük Britanya söz sahibiyken, daha sonraki dönemlerde ABD, 
                Rusya, İskandinav ülkeleri, İtalya ve Kore bu ülkeleri izlemiştir. 1931'de kurulan ve hâlen 140 ülkenin üye olduğu Uluslararası 
                Okçuluk Federasyonu (FITA - Fédération Internationale de Tir a l'Arc) okçuluk dalında en büyük otoritedir.

               Ekipman ve kurallar
Yaylar (yaygın kullanılan türleri: Olimpik yay,Makaralı yay), fiber, ahşap, karbon veya çelikten imal edilir. 
Yayın esnek maddesi solar kauçuktan yapılır. Buna mirsin adı verilir. Bilinen ilk kompozit (çok parçalı) katı yay Hunlar
 tarafından yapılmıştır. Oklar ise fiber, karbon, alüminyum tahta veya çelikten olabilir. Oklar kompozit olarak birkaç malzemenin 
 birlikte kullanılması ile de yapılabilir. Okun arkasında oku yönlendiren 3 tane tüy bulunur. Oklar 60 ila 71 cm uzunluğunda, 
 ağırlıkları ise 20 ila 28 gram arasında olmalıdır. Hedef, çember çizgilerle beş renge boyanır. Bu renkler merkezden dışa doğru
  sırasıyla sarı, kırmızı, mavi, siyah ve beyazdır. Her renk şerit de ikiye ayrılır. Böylece hedef içten dışa doğru 10'dan 1'e 
  inen sayılarla numaralanır. 122 cm çapındaki hedef 70, 60,20 metre atışlarında, 80 cm çapındaki hedef ise 50 ve 30 metre
   atışlarında kullanılır. Salon yarışlarında; 25 metre uzaklıktaki hedefin çapı 60 cm, 18 metre uzaklıktaki hedefin çapı ise
    40 cm olmalıdır.

Her ok hedefte vurduğu yere göre puan alır. Bir ok halkaları ayıran çizginin tam üzerine saplanmışsa daha yüksek olan puanı alır. 
Uluslararası yarışmalarda erkekler iki turda yüz kırk dörder ok atarlar. Her turda okçu 70, 50 ve 30 metreden hedefe üçer düzine ok 
atar. Kadınlarda 4 ayrı mesafeden üçer metredir. Okçular her seferinde sayılarını okumadan önce 6 atış yaparlar. 50 ve 30 metreden 
daha küçük hedefe yaptıkları atışlarda ise 3 atışta bir sayı okunur. Bir yarışmada her sporcu toplam 288 atış yapar.Hedefin çapı ok 
atış uzaklığına göre belirlenmiştir. Yarışmanın birincisi toplam puana göre belirlenir. Kol ve sırt kaslarını , göz koordinasyonunu
 geliştiren bir spordur.
               </Typography></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>deneme</Paper>
        </Grid>
        
     
      
    
</Grid>

        </Container>

    </React.Fragment>
  );



}
