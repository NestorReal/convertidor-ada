import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './LoaderStyles';
import LoaderContext from '../../Context/Loader/LoaderContext';

const Loader = () => {
  const classes = useStyles();
  const [showLoaders, setshowLoaders] = useState(true);
  const { showLoader } = useContext(LoaderContext);
  useEffect(() => {
    setshowLoaders(showLoader);
  }, [showLoader]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.progress}
        id="progressBar"
        style={{
          display: (showLoaders && 'flex') || 'none'
        }}
      >
        <div className={classes.loader}></div>
        <Typography variant="h3" className={classes.h3}>
          Procesando solicitud. Espere un momento...
        </Typography>
      </Grid>
    </>
  );
};
export { Loader };
