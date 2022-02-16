/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import {
  Grid,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  FilledInput
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useStyles } from './LoginStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { LogginContext } from '../../Context/Loggin/LogginContext';

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const { handleLoggin } = useContext(LogginContext);

  const classes = useStyles();
  const validationSchema = yup.object({
    password: yup
      .string('se requiere una contraseña con letras')
      .min(6, 'se requiere una contraseña con almenos 6 caracteres')
      .required('La contraseña es requerida'),
    email: yup
      .string('Se requiere un correo con letras')
      .email('Se requiere un correo con un formato valido')
      .required('El correo es un campo obligatorio')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      handleLoggin(values);
    }
  });
  return (
    <Grid className={classes.rootContainer}>
      <form
        className={classes.form}
        key="Login"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12} md={12} className={classes.adaContainer}>
            <img src={process.env.REACT_APP_LOGO_ADA_URL} alt="Logo-Ada" />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} md={1}>
              <img src={process.env.REACT_APP_LOGO_URL} alt="Logo-Ada" />
            </Grid>
            <Grid item xs={10} md={9}>
              <Typography
                style={{ fontSize: '50px', fontWeight: 800, color: 'white' }}
              >
                INICIA SESIÓN
              </Typography>
              <Typography
                style={{ fontSize: '30px', fontWeight: 800, color: 'white' }}
              >
                Introduce tu correo electrónico y contraseña para acceder a la
                plataforma:
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={10} md={2}>
              &nbsp;
            </Grid>
            <Grid
              item
              xs={10}
              md={9}
              style={{
                backgroundColor: 'white',
                maxWidth: '1176px',
                borderRadius: '40px',
                padding: '56px 83px 120px 62px',
                height: '504px'
              }}
            >
              <Typography
                style={{
                  padding: '10px 0px 16px 21px',
                  fontSize: '33px',
                  fontWeight: 800,
                  color: 'black'
                }}
              >
                Correo electrónico
              </Typography>
              <FormControl fullWidth className={classes.input} color="primary">
                <FilledInput
                  className={classes.input}
                  placeholder="adrian@animasoluciones.es"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                />
                {formik.touched.password && (
                  <Typography className={classes.helperText}>
                    {formik.errors.email}
                  </Typography>
                )}
              </FormControl>
              <Typography
                style={{
                  padding: '44px 0px 16px 21px',
                  fontSize: '33px',
                  fontWeight: 800,
                  color: 'black'
                }}
              >
                Contraseña
              </Typography>
              <FormControl fullWidth className={classes.input} color="primary">
                <FilledInput
                  className={classes.input}
                  placeholder="....."
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id="password"
                  inputProps={{
                    minLength: 6,
                    maxLength: 50,
                    autoComplete: 'off'
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formik.touched.password && (
                  <Typography className={classes.helperText}>
                    {formik.errors.password}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={10} md={2}>
              &nbsp;
            </Grid>
            <Grid
              item
              xs={10}
              md={9}
              style={{
                backgroundColor: 'white',
                maxWidth: '1176px',
                borderRadius: '40px',
                marginTop: '42px'
              }}
            >
              <Button
                style={{ color: '#575756', fontSize: '35px', fontWeight: 800 }}
                fullWidth
                type="submit"
              >
                INICIAR SESIÓN
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export { Login };
