import React from 'react';
import { SvgIcon, makeStyles } from '@material-ui/core';
import { ReactComponent as MySvg } from './GaziOkculukLogo.svg';

const useStyles = makeStyles((theme) => ({
  
    mySvgStyle:
    {
      fillColor: theme.palette.primary.main,
  },
}));


export default function Logo() {

  const classes = useStyles();

  return (
    <SvgIcon className={classes.mySvgStyle}>
      <MySvg />
    </SvgIcon>
  )
}