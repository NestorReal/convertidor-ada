/* eslint-disable no-undef */
import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useStyles } from './UploadFileStyles';
import { Images } from '../../assets/Images';
import { LogginContext } from '../../Context/Loggin/LogginContext';
import { deleteItem } from '../../utils/persistentStorage';

const UploadFiles = () => {
  const classes = useStyles();
  const [csv, setCsv] = useState([]);
  const { handleUploadFIles, responseUpload } = useContext(LogginContext);

  const nameFiles = [
    { label: 'Usuarios', fileName: 'users' },
    { label: 'Score', fileName: 'score' },
    { label: 'Balance', fileName: 'balance' },
    { label: 'Prestamo', fileName: 'lends' },
    { label: 'Pagos', fileName: 'payments' }
  ];
  const selectCsv = (event, type) => {
    Object.keys(event.target.files).map((keyFile) => {
      if (event.target.files[keyFile].name.match(/\.(xls|xlsx|csv)$/)) {
        const find = csv.filter((csvitem) => csvitem.type === type);
        if (find.length !== 0) {
          csv.map((item, index) => item.type === type && csv.splice(index, 1));
          csv.push({ type, file: event.target.files[keyFile] });
        } else {
          csv.push({ type, file: event.target.files[keyFile] });
        }
      }
    });
    setCsv([...csv]);
  };
  const getNameFile = (typeFile) => {
    let nameFile = '';
    csv.map((itemcvs) => {
      if (itemcvs.type === typeFile) nameFile = itemcvs.file.name;
    });
    return nameFile;
  };
  const sendData = async () => {
    const formData = new FormData();
    csv.map((itemFile) => formData.append(itemFile.type, itemFile.file));
    handleUploadFIles(formData);
  };

  useEffect(() => {
    if (responseUpload !== null) {
      if (responseUpload.message === 'upload successfully') {
        setCsv([]);
      }
    }
  }, [responseUpload]);
  const closeSession = () => {
    deleteItem('session');
    window.location = '/';
  };

  return (
    <Grid className={classes.rootContainer}>
      <Grid container>
        <Grid item xs={12} md={12} className={classes.header}>
          <img src={process.env.REACT_APP_LOGO_FILES_URL} alt="Logo-Ada" />
          <img
            src={process.env.REACT_APP_LOGO_ADA_URL}
            alt="Logo-Ada"
            className={classes.logoAdda}
          />
        </Grid>
        <Container maxWidth="xl" className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography className={classes.filesNumber}>
                SUBE TUS {nameFiles.length} FICHEROS
              </Typography>
              <Typography className={classes.selectTitle}>
                Examina los {nameFiles.length} archivos y luego presiona el
                botón de subir
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} className={classes.contentFiles}>
              {nameFiles.map((itemFile) => (
                <div key={itemFile.label}>
                  <input
                    accept="xls"
                    style={{ display: 'none' }}
                    id={`file-contained-button-(${itemFile.label})`}
                    multiple
                    type="file"
                    onChange={(e) => selectCsv(e, itemFile.fileName)}
                  />
                  <label htmlFor={`file-contained-button-(${itemFile.label})`}>
                    <Button className={classes.button} component="span">
                      <img
                        src={Images.UploadIcon}
                        alt="Arrow"
                        className={classes.imageUpload}
                      />
                      {getNameFile(itemFile.fileName) === ''
                        ? `Fichero ${itemFile.label}`
                        : getNameFile(itemFile.fileName)}
                    </Button>
                  </label>
                </div>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              className={classes.constentUloadconstentUload}
            >
              <Button
                fullWidth
                variant="contained"
                className={classes.buttonUpload}
                disabled={csv.length < 5}
                onClick={() => sendData()}
              >
                Subir
              </Button>
            </Grid>
            <Grid item xs={12} md={12} className={classes.contentCloseButton}>
              <Typography
                className={classes.closeSession}
                onClick={() => closeSession()}
              >
                Cerrar sesión
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export { UploadFiles };
