import { makeStyles } from '@mui/styles';
import _ from 'lodash';
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

const useStyles = makeStyles((theme) => ({
  progress: {
    paddingTop: '10%',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999999,
    textAlign: 'center',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto !important',
    backgroundColor: hexToRGB(_.get(theme, 'palette.primary.dark'), 0.9)
  },
  h3: {
    color: _.get(theme, 'palette.common.white'),
    fontWeight: 400,
    margin: '1rem 0',
    padding: '16px'
  },
  icon: {
    color: 'red'
  },
  loader: {
    color: _.get(theme, 'palette.secondary.main'),
    fontSize: '1rem',
    margin: '5rem auto',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    position: 'relative',
    textIndent: '-999em',
    WebkitAnimation: '$load4 1.7s infinite linear',
    animation: '$load4 1.7s infinite linear',
    WebkitTransform: 'transtaleZ(0)',
    msTransform: 'transtaleZ(0)',
    transform: 'transtaleZ(0)'
  },
  '@keyframes load4': {
    '0%': {},
    '100%': {
      boxShadow:
        '0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0'
    },
    '12.5% ': {
      boxShadow:
        '0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em'
    },
    '25% ': {
      boxShadow:
        ' 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em'
    },
    '37.5%': {
      boxShadow:
        '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em'
    },
    '50%': {
      boxShadow:
        '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em'
    },
    '62.5%': {
      boxShadow:
        '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em'
    },
    '75%': {
      boxShadow:
        '0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0'
    },
    '87.5%': {
      boxShadow:
        '0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em'
    }
  }
}));

export { useStyles };
