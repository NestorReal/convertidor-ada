import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Dialog, Typography, Button } from '@mui/material';
import { useStyles } from './ModalContextStyles';
import ModalUseContext from '../../Context/Modal/ModalContext';

const ModalContext = ({ children, size }) => {
  const classes = useStyles();
  const {
    showModal,
    contentModal,
    changeVisibilityModal,
    close,
    handleContent
  } = useContext(ModalUseContext);

  return (
    <Dialog
      onClose={() => {
        changeVisibilityModal(!showModal);
        handleContent({});
      }}
      open={showModal}
      maxWidth={size}
      fullWidth
    >
      <Box p={2} className={classes.boxContent}>
        {contentModal && (
          <Box
            width={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb={2}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.fontWeightBold}
              >
                {contentModal}
              </Typography>
            </Box>
            {!close && (
              <Button
                className={classes.button}
                onClick={() => {
                  changeVisibilityModal(!showModal);
                  handleContent();
                }}
              >
                Aceptar
              </Button>
            )}
          </Box>
        )}
        {children}
      </Box>
    </Dialog>
  );
};
ModalContext.defaultProps = {
  modal: { close: true },
  size: 'md',
  actionButtons: undefined
};

ModalContext.propTypes = {
  modal: PropTypes.object,
  actions: PropTypes.object,
  children: PropTypes.node,
  size: PropTypes.string,
  actionButtons: PropTypes.array,
  helpText: PropTypes.string
};

export { ModalContext };
