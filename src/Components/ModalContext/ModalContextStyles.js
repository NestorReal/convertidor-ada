import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    borderRadius: '10px'
  },
  boxContent: {
    background: theme.palette.primary.dark
  },
  icon: { color: theme.palette.common.white, fontSize: '50px' },
  fontWeightBold: {
    fontSize: '25px !important',
    color: `${theme.palette.common.white} !important`,
    padding: theme.spacing(1.5)
  },
  iconSuccess: { color: theme.palette.common.white, fontSize: '50px' },
  iconError: { color: theme.palette.common.white, fontSize: '35px !important' },
  button: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: `${theme.palette.secondary.contrastText} !important`,
    fontSize: '40px !imporant',
    fontWeight: '800 !important'
  },
  iconClose: {
    color: theme.palette.common.white,
    fontSize: '30px',
    cursor: 'pointer'
  },
  helpText: {
    color: theme.palette.common.white,
    fontWeight: 800,
    fontSize: '500px !important'
  }
}));

export { useStyles };
