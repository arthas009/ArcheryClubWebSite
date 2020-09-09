import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.primary.main
  },
  cardMedia: {
    width: 20,
    height:20,
  },
});

function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted, image } = props;
  return (
    <Card>
    <div align='center' className={highlighted ? classes.cardHightlighted : classes.card}>
        
        
    
      
      
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <CheckIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark
            }}
          />
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {feature}
            </Typography>
          </Box>
        </Box> 
      ))}


      
   
    </div>
    
    <CardMedia className={classes.cardMedia}> 
       
       {image}
       
       </CardMedia>
       
     
    </Card>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
 // image: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PriceCard);
