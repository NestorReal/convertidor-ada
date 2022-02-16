/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import LoaderContext from './LoaderContext';
import LoaderReducer from './LoaderReducer';

import { CHANGE_LOADER } from '../Types';

const LoaderState = (props) => {
  const initialState = {
    showLoader: false
  };

  const [state, dispatch] = useReducer(LoaderReducer, initialState);

  const changeVisibility = async (show) => {
    dispatch({ type: CHANGE_LOADER, payload: show });
  };

  return (
    <LoaderContext.Provider
      value={{
        showLoader: state.showLoader,
        changeVisibility
      }}
    >
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderState;
