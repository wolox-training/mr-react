import { actionTypes } from './actions';

const initialState = {
  loginError: null,
  signUpError: null,
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_SUCCESS:
      return {...state, loginError: null };
    case actionTypes.LOG_IN_ERROR:
      return {...state, loginError: action.payload.error };
    case actionTypes.SIGN_UP_SUCCESS:
      return {...state, signUpError: null};
    case actionTypes.SIGN_UP_ERROR:
      return {...state, signUpError: action.payload.error};
    case actionTypes.GET_CURRENT_USER_SUCCESS:
      return {...state, user: action.payload.data};
    default:
      return state;
  }
}

export default authReducer;
