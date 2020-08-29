import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainFeaturedPost from '../../Components/MainFeaturedPost';

const mainFeaturedPost = [{
  title: 'Gazi Okçuluk Klübü / Hakkında',
  description:
    "",
  image: 'https://www.colinglen.org/content/uploads/2020/02/Colin-Glen-987.jpg',
  btnName: '',
  btnUrl: '',
}
];


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
    marginTop: theme.spacing(2),
  },
  marginTopDiv:
  {
    marginTop: theme.spacing(5),
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
}));

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

export default function Iletisim() {
  const classes = useStyles();

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
            <Typography variant="h3" color="textPrimary">İletişim</Typography>
          </Box>
        </Grid>
        <Grid className={classes.mainGrid}>

          <div>
            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h4"
              className={classes.bodyClass}
            >
              Biz Kimiz ?
     </Typography>
            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, kurulduğu günden bu yana işine ilk gün sahip olduğu hevesle ve azime devam etmiştir ve devam etmektedir.
     </Typography>
          </div>
          <div className={classes.marginTopDiv}>

            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h4"
              className={classes.bodyClass}
            >
              Misyonumuz
     </Typography>
            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, misyon olarak kendine her zaman enerjik ve dinamik kalmayı, işini en iyi yapmayı edinmiştir.
     </Typography>
          </div>

          <div className={classes.marginTopDiv}>
            <Typography
              noWrap
              key="VizyonTypography"
              variant="h4"
              className={classes.bodyClass}
            >
              Vizyonumuz
     </Typography>
            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, vizyon olarak yenilikçi ve üretken olmayı, spor bilimine katkıda bulunmayı hedeflemiştir.
     </Typography>
          </div>
          <div className={classes.marginTopDiv}>
            <Typography
              noWrap
              key="VizyonTypography"
              variant="h4"
              className={classes.bodyClass}
            >
              Tarihçe
     </Typography>
            <Typography
              noWrap
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, ../../.... tarihinde ...... ve ....... tarafından kurulmuştur.
     </Typography>
          </div>

        </Grid>
      </Container>
    </React.Fragment>
  );
}
