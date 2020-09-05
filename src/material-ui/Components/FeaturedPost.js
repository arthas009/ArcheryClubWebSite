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
    [theme.breakpoints.up('lg')]: {
      width: '75rem',
    },
    width: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '20rem',
    },
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 600,
    height: 400,
  },
  cardContent:
  {
    overflow: "auto",
    textOverflow: "ellipsis",
    [theme.breakpoints.up('lg')]: {
      width: '35rem',
    },
    width: '35rem',
    [theme.breakpoints.down('md')]: {
      width: '10rem',
    },
    height: "100%"

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

  const CustomLink = props => <Link to={"/OkculukHakkinda"} {...props}></Link>;

  if (fromWhere === "mainPage")
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
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 300, overflow: "auto" }} variant="subtitle1" paragraph>

              </Typography>
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 300, overflow: "auto" }} variant="subtitle1" paragraph color="inherit">
                {post.description.substring(0, 550)}
              </Typography>
              <Button component={CustomLink} color="primary"> Devamını Okumak için ...
              </Button>
            </CardContent>
          </div>
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
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 300, overflow: "auto" }} variant="subtitle1" paragraph>

              </Typography>
              <Typography className={classes.overflowEnabled} style={{ maxHeight: 300, overflow: "auto" }} variant="subtitle1" paragraph color="inherit">
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
