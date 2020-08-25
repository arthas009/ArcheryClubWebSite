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

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 100,
  },
  cardContent: {
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    width: '20rem'
  }
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={8} md={4}>
      <CardActionArea component="a" href="/">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent className={classes.cardContent}>
              <Typography  component="h2" variant="h5">
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
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image="https://mind4survival.com/wp-content/uploads/2018/08/Traditional-Archery-Mind4Survival.jpg" title="" />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
