import { actionTypes } from './actions';

const initialState = {
  loginError: null,
  signUpError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_ERROR:
      return {...state, loginError: action.payload.error };
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.payload.error};
    default:
      return state;
  }
}

export default authReducer;
