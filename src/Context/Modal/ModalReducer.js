import { CHANGE_SHOW_MODAL, CHANGE_CONTENT_MODAL } from '../Types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CHANGE_SHOW_MODAL:
      return {
        ...state,
        showModal: payload
      };
    case CHANGE_CONTENT_MODAL:
      return {
        ...state,
        contentModal: payload.content,
        title: payload.title,
        actions: payload.actions
      };
    default:
      return state;
  }
};
