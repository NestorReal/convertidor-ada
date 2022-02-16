import { CHANGE_LOADER } from '../Types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CHANGE_LOADER:
      return {
        ...state,
        showLoader: payload
      };
    default:
      return state;
  }
};
