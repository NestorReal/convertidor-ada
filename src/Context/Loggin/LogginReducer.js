import { LOGGIN, UPLOAD_FILES } from '../Types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOGGIN:
      return {
        ...state,
        userData: payload
      };
    case UPLOAD_FILES:
      return {
        ...state,
        responseUpload: payload
      };
    default:
      return state;
  }
};
