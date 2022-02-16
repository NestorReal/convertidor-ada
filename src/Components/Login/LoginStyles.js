/* eslint-disable no-undef */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.backgroundLoggin,
    backgroundImage: `url(${process.env.REACT_APP_LOGO_BACKGROUND_URL})`,
    backgroundPositionY: '35vh !important',
    backgroundPositionX: '-25vh',
    backgroundSize: '45%',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat'
  },
  adaContainer: {
    display: 'flex',
    padding: '44px 48px 34px 0px',
    justifyContent: 'end'
  },
  input: {
    height: '80px',
    fontSize: '30px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: `3px solid ${theme.palette.primary.main}`
    },
    '& .MuiFilledInput-underline': {
      backgroundColor: 'white',
      border: `3px solid ${theme.palette.primary.main}`
    },
    '& ::placeHolder': {
      fontSize: '30px !important',
      margin: '10px'
    },
    '& input': {
      fontSize: '30px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '40px',
      color: theme.palette.primary.main
    }
  },
  helperText: {
    color: theme.palette.error.main,
    textAlign: 'start',
    fontSize: '1rem !important',
    marginRight: '14px !important',
    marginTop: '10px !important'
  }
}));

export { useStyles };
