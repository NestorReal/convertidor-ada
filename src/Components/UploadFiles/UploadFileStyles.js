/* eslint-disable no-undef */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: { height: '50vh !important', padding: '128px 0px 37px 0px' },
  header: {
    display: 'flex',
    padding: '10px 64px 15px 45px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.backgroundHeader
  },
  button: {
    height: '63px',
    width: '264px',
    font: 'normal normal normal 22px/24px Gotham; !important',
    border: '2px solid !important'
  },
  selectTitle: {
    color: theme.palette.primary.main,
    fontSize: '35px !important',
    fontWeight: '800 !important'
  },
  filesNumber: {
    color: theme.palette.primary.main,
    fontSize: '56px !important',
    fontWeight: '800 !important'
  },
  contentFiles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '52px !important',
    marginBottom: '72px !important'
  },
  imageUpload: {
    marginRight: '10px !important',
    height: '43px !important'
  },
  buttonUpload: {
    fontSize: '35px !important',
    fontWeight: '800 !important',
    borderRadius: '43px !important'
  },
  closeSession: {
    textAlign: 'center',
    fontSize: '33px !important',
    textDecoration: 'underline',
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  contentCloseButton: {
    marginTop: '18vh !important'
  },
  constentUload: { padding: '25px !important' },
  logoAdda: { height: '48px' }
}));

export { useStyles };
