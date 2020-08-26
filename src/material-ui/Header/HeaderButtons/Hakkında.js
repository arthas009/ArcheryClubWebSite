import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography, Box } from '@material-ui/core';



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



export default function Hakkında() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      <Grid className={classes.heaederGrid}>
          <Box className={classes.pageHeader}>
            <Typography variant="h3" color="textPrimary">Hakkında</Typography>
          </Box>
        </Grid>
        <Grid className={classes.mainGrid}>

          <div>
            <Typography
              key="TechnologyPageMainBody"
              variant="h4"
              className={classes.bodyClass}
            >
              Biz Kimiz ?
       </Typography>
            <Typography
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, kurulduğu günden bu yana işine ilk gün sahip olduğu hevesle ve azime devam etmiştir ve devam etmektedir.
       </Typography>
          </div>
          <div className={classes.marginTopDiv}>

            <Typography
              key="TechnologyPageMainBody"
              variant="h4"
              className={classes.bodyClass}
            >
              Misyonumuz
       </Typography>
            <Typography
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, misyon olarak kendine her zaman enerjik ve dinamik kalmayı, işini en iyi yapmayı edinmiştir.
       </Typography>
          </div>

          <div className={classes.marginTopDiv}>
            <Typography
              key="VizyonTypography"
              variant="h4"
              className={classes.bodyClass}
            >
              Vizyonumuz
       </Typography>
            <Typography
              key="TechnologyPageMainBody"
              variant="h7"
              className={classes.bodyClass}
            >
              Gazi Okçuluk Klübü, vizyon olarak yenilikçi ve üretken olmayı, spor bilimine katkıda bulunmayı hedeflemiştir.
       </Typography>
          </div>
          <div className={classes.marginTopDiv}>
            <Typography
              key="VizyonTypography"
              variant="h4"
              className={classes.bodyClass}
            >
              Tarihçe
       </Typography>
            <Typography
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
