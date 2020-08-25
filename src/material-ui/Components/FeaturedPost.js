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

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 100,
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
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={6} md={6}>
      <CardActionArea component="a" href="/">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography component="h2" variant="h5">
                {post.haberBasligi}
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" color="textSecondary">
                {post.haberTarihi}
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" paragraph>
                {post.haberIcerigi}
              </Typography>
              <Typography style={{ wordWrap: "break-word" }} variant="subtitle1" color="primary">
                Okumaya devam ett....
              </Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image="https://mind4survival.com/wp-content/uploads/2018/08/Traditional-Archery-Mind4Survival.jpg" title="" />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
