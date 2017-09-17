import React, {Component} from 'react';
import { connect } from 'react-redux';

import Login from './layout';

import { actionCreators } from '../../../../redux/auth/actions';

class LoginContainer extends Component {
  onSubmit = (values) => {
    this.props.dispatch(actionCreators.logIn(values));
  }

  render() {
    return <Login onSubmit={this.onSubmit} loginError={this.props.loginError} />
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError
  }
}

export default connect(mapStateToProps)(LoginContainer);
