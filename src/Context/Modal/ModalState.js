/* eslint-disable react/prop-types */
import React, { useReducer, useState } from 'react';
import LoaderContext from './ModalContext';
import LoaderReducer from './ModalReducer';

import { CHANGE_SHOW_MODAL, CHANGE_CONTENT_MODAL } from '../Types';

const ModalState = (props) => {
  const [show, setshow] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [actions, setActions] = useState(null);

  const initialState = {
    showModal: show,
    contentModal: content,
    title,
    actions,
  };

  const [state, dispatch] = useReducer(LoaderReducer, initialState);

  const handleContent = ({ actions = null, title = null, content = null }) => {
    dispatch({
      type: CHANGE_CONTENT_MODAL,
      payload: { actions, title, content },
    });
  };

  const changeVisibility = async (showModal) => {
    setshow(showModal);
    dispatch({ type: CHANGE_SHOW_MODAL, payload: showModal });
  };

  return (
    <LoaderContext.Provider
      value={{
        showModal: state.showModal,
        contentModal: state.contentModal,
        title: state.title,
        actions: state.actions,
        changeVisibilityModal: changeVisibility,
        handleContent,
        handleChangeactions: setActions,
        handleChangetitle: setTitle,
        handleChangecontent: setContent,
      }}
    >
      {props.children}
    </LoaderContext.Provider>
  );
};

export default ModalState;
