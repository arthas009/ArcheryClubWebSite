import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

/*const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
    [theme.breakpoints.down('md')]: {
      bottom: 0,
    },
    display: 'inline',
  },
  cardContent: {
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    [theme.breakpoints.up('lg')]: {
      width: '25rem',
      overflow:'auto',
    },
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '10rem',
      overflow:'auto',
    },    
  }
}));*/
const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.up('lg')]: {
      width: '75rem',
    },
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '10rem',
    },
    display: 'flex',
    height: 400,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 600,
  },
  cardContent:
  {
    overflow: "auto", 
    textOverflow: "ellipsis", 
    [theme.breakpoints.up('lg')]: {
      width: '25rem',
    },
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '10rem',
    }
 }
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    
    <Grid item xs={6} md={6} className={classes.featuredPost}> 
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                Okçuluğun Kökeni
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" color="textSecondary">
                29.08.2020
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" paragraph>

              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" paragraph color="inherit">
              Okçuluk. Kökeni insanoğlunun avcılık günlerine dayanan, oku bir yay aracılığıyla hedefe göndermeyi amaçlayan spor dalı. Okçuluk ilk kez 1904 Yaz Olimpiyatları'nda olimpik programa alınmış, 1972'den beri aralıksız olarak programlarda yer almaktadır. Bu branşta ilk dönemlerde Fransa, Belçika ve Büyük Britanya söz sahibiyken, daha sonraki dönemlerde ABD, Rusya, İskandinav ülkeleri, İtalya ve Kore bu ülkeleri izlemiştir. 1931'de kurulan ve hâlen 140 ülkenin üye olduğu Uluslararası Okçuluk Federasyonu (FITA - Fédération Internationale de Tir a l'Arc) okçuluk dalında en büyük otoritedir.
              </Typography>
              <Typography color ="inherit">Ekipman ve kurallar
Yaylar (yaygın kullanılan türleri: Olimpik yay,Makaralı yay), fiber, ahşap, karbon veya çelikten imal edilir. Yayın esnek maddesi solar kauçuktan yapılır. Buna mirsin adı verilir. Bilinen ilk kompozit (çok parçalı) katı yay Hunlar tarafından yapılmıştır. Oklar ise fiber, karbon, alüminyum tahta veya çelikten olabilir. Oklar kompozit olarak birkaç malzemenin birlikte kullanılması ile de yapılabilir. Okun arkasında oku yönlendiren 3 tane tüy bulunur. Oklar 60 ila 71 cm uzunluğunda, ağırlıkları ise 20 ila 28 gram arasında olmalıdır. Hedef, çember çizgilerle beş renge boyanır. Bu renkler merkezden dışa doğru sırasıyla sarı, kırmızı, mavi, siyah ve beyazdır. Her renk şerit de ikiye ayrılır. Böylece hedef içten dışa doğru 10'dan 1'e inen sayılarla numaralanır. 122 cm çapındaki hedef 70, 60,20 metre atışlarında, 80 cm çapındaki hedef ise 50 ve 30 metre atışlarında kullanılır. Salon yarışlarında; 25 metre uzaklıktaki hedefin çapı 60 cm, 18 metre uzaklıktaki hedefin çapı ise 40 cm olmalıdır.

Her ok hedefte vurduğu yere göre puan alır. Bir ok halkaları ayıran çizginin tam üzerine saplanmışsa daha yüksek olan puanı alır. Uluslararası yarışmalarda erkekler iki turda yüz kırk dörder ok atarlar. Her turda okçu 70, 50 ve 30 metreden hedefe üçer düzine ok atar. Kadınlarda 4 ayrı mesafeden üçer metredir. Okçular her seferinde sayılarını okumadan önce 6 atış yaparlar. 50 ve 30 metreden daha küçük hedefe yaptıkları atışlarda ise 3 atışta bir sayı okunur. Bir yarışmada her sporcu toplam 288 atış yapar.Hedefin çapı ok atış uzaklığına göre belirlenmiştir. Yarışmanın birincisi toplam puana göre belirlenir. Kol ve sırt kaslarını , göz koordinasyonunu geliştiren bir spordur.</Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image="https://mind4survival.com/wp-content/uploads/2018/08/Traditional-Archery-Mind4Survival.jpg" title="" />
        </Card>
    </Grid>
    
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
