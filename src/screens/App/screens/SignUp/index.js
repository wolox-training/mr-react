import React, {Component} from 'react';
import { connect } from 'react-redux';

import {toSnakeCase} from '../../../../utils/stringParsers'
import { actionCreators } from '../../../../redux/auth/actions';

import SignUp from './layout'

class SignUpContainer extends Component {

  onSubmit = (values) => {
    const requireFields = ['email', 'password', 'confirmPassword', 'firstName', 'lastName'];
    const user = requireFields.reduce((obj, key) => {
      obj[toSnakeCase(key)] = values[key]
      return obj;
    }, {});
    this.props.dispatch(actionCreators.signUp(user));
  }

  render() {
    return <SignUp onSubmit={this.onSubmit} signUpError={this.props.signUpError} />
  }
}

const mapStateToProps = state => {
  return {
    signUpError: state.auth.signUpError
  }
}

export default connect(mapStateToProps)(SignUpContainer);
