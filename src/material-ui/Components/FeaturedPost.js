import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia,Button, Link } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('xs')]: {
      width: "25em",
    },  
    //Benim telefon
    [theme.breakpoints.down('sm')]: {
      width: "30em",
      height:'50vh',
      padding: theme.spacing(1),
    },  
    //laptop ekranları
    [theme.breakpoints.up('md')]: {
      width: '60rem',
    },
    //Büyük ekranlar
    [theme.breakpoints.up('lg')]: {
      width: '75rem',
      height:'50vh',
    },
   
    display: 'flex',
  },
  cardDetails: {
    flex: 0,
  },

  //resim olan kısım
  cardMedia: {
    //height: '%100',
    [theme.breakpoints.down('xs')]: {
      width: "25em",
    },  
    [theme.breakpoints.down('sm')]: {
      width: '35%',
      height: '50%',
      padding: theme.spacing(9),
    },  
    [theme.breakpoints.up('md')]: {
      width: '60rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
      width: '75rem',
    },
   
   // display: 'flex',
  },
  cardContent:
  {
    overflow: "auto",
    textOverflow: "ellipsis",
  
    [theme.breakpoints.down('xs')]: {
      width: "25em",
     
    },
    [theme.breakpoints.down('sm')]: {
      width: "15em",
      height: '50vh',
      padding: theme.spacing(1),
    },   
    [theme.breakpoints.up('md')]: {
      width: '30rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40rem',
      height:'50vh',
    },
  //  height: "100%"

  },
  overflowEnabled:
  {
    overflow: "auto",
    textOverflow: "ellipsis",
  }


}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post, fromWhere } = props;

  const CustomLink = props => <Link href={"/" + props.name} {...props}></Link>;

  if (fromWhere === "mainPage")
    return (

      <Grid item xs={"auto"} md={"auto"} className={classes.featuredPost}>
        <Card className={classes.card}>
          
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
              {post.title}
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" color="textSecondary">
              {post.date}
              </Typography>
              <Typography className={classes.overflowEnabled}  style={{ maxHeight: 300, overflow: "auto"  }} variant="subtitle1" paragraph noWrap>

              </Typography>
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 300, overflow: "auto" }} variant="subtitle1" paragraph color="inherit">
                {post.description.substring(0, 150)}
              </Typography>
              <Button   component={CustomLink}
                        name={"OkculukHakkinda"}
                        color="inherit"
                        key={"RouteOkculukHakkinda"}
                       color="primary"> Devamını Okumak için ...
              </Button>
            </CardContent>
         
          <CardMedia className={classes.cardMedia} image="https://mind4survival.com/wp-content/uploads/2018/08/Traditional-Archery-Mind4Survival.jpg" title="" />
        </Card>
      </Grid>
     
    );

  else {
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
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 600, overflow: "auto" }} variant="subtitle1" paragraph>

              </Typography>
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 600, overflow: "auto" }} variant="subtitle1" paragraph color="inherit">
                {post.description}
              </Typography>

            </CardContent>
          </div>
          <CardMedia className={classes.cardMedia} image="https://mind4survival.com/wp-content/uploads/2018/08/Traditional-Archery-Mind4Survival.jpg" title="" />
        </Card>
      </Grid>
      
    );
  }
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
