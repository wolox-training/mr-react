import { actionTypes } from './actions';

const initialState = {
  loginError: null,
  signUpError: null,
  user: {
    first_name: '',
    last_name: '',
    comments_counter: 0,
    rents_counter: 0,
    email: '',
    rents: [],
    wishlist: [],
    comments: []
  }
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
      return {...state, user: {...action.payload.data, rents: [], wishlist: [], comments: []}};
    case actionTypes.GET_USER_RENTS_SUCCESS:
      return {...state, user: {...state.user, rents: action.payload.data }};
    case actionTypes.GET_USER_WISHLIST_SUCCESS:
      return {...state, user: {...state.user, wishlist: action.payload.data }};
    case actionTypes.GET_USER_COMMENTS_SUCCESS:
      return {...state, user: {...state.user, comments: action.payload.data }};
    default:
      return state;
  }
}

export default authReducer;
