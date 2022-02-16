/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import { LogginContext } from './LogginContext';
import LogginReducer from './LogginReducer';
import { setItem } from '../../utils/persistentStorage';
import { useApi } from '../../Hooks';
import { LOGGIN, UPLOAD_FILES } from '../Types';

const LogginState = (props) => {
  const initialState = {
    userData: null,
    responseUpload: null
  };
  const [postLoggin] = useApi({
    endpoint: 'login',
    method: 'post'
  });

  const [postFiles] = useApi({
    endpoint: 'api/v1/dashboard/upload',
    method: 'post'
  });

  const [state, dispatch] = useReducer(LogginReducer, initialState);

  const handleLoggin = async (userData) => {
    const response = await postLoggin({
      body: userData,
      messages: true,
      url: process.env.REACT_APP_LOGIN_URL
    });
    if (response.token) {
      setItem('session', response);
      dispatch({ type: LOGGIN, payload: response.payload });
      window.location = '/uploadFiles';
    }
  };

  const handleUploadFIles = async (files) => {
    const response = await postFiles({
      body: files,
      message: true,
      url: process.env.REACT_APP_UPLOAD_URL
    });
    dispatch({ type: UPLOAD_FILES, payload: response });
  };
  return (
    <LogginContext.Provider
      value={{
        userData: state.userData,
        responseUpload: state.responseUpload,
        handleLoggin,
        handleUploadFIles
      }}
    >
      {props.children}
    </LogginContext.Provider>
  );
};

export { LogginState };
