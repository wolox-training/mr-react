import { push } from 'react-router-redux';
import { loginUser, signUp } from '../../services/authService';

const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'LOG_IN_ERROR',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR'
}

const actionCreators = {
  login(user) {
    return async dispatch => {
      dispatch({ type: actionTypes.LOG_IN });
      loginUser(user.email, user.password)
        .then((response) => {
          dispatch(actionCreators.loginSuccess());
          dispatch(push('/dashboard'));
        })
        .catch((error) => {
          dispatch(actionCreators.loginError(error.response.data.error));
        })
    }
  },
  loginSuccess() {
    return { type: actionTypes.LOG_IN_SUCCESS };
  },
  loginError(error) {
    return {
      type: actionTypes.LOG_IN_ERROR,
      payload: { error }
    };
  },
  signUp(user) {
    return async dispatch => {
      dispatch({ type: actionTypes.SIGN_UP });
      signUp(user)
        .then((response) => {
          dispatch(actionCreators.signUpSuccess());
          dispatch(push('/login'));
        })
        .catch((error) => {
          dispatch(actionCreators.signUpError(error.response.data.error));
        })
    }
  },
  signUpSuccess() {
    return { type: actionTypes.SIGN_UP_SUCCESS };
  },
  signUpError(error) {
    return {
      type: actionTypes.SIGN_UP_ERROR,
      payload: { error }
    };
  }
}

export { actionCreators, actionTypes }
