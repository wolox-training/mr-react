import React from 'react'
import {loginUser} from '../../../../services/authService'
import {validEmail, validPassword} from '../../../../utils/validators'

import Form from '../../components/Form'

import Login from './layout'

class LoginContainer extends Form {

  state = {
    email: '',
    password: '',
    touched: {},
    errors: {}
  }

  validate = () => {
    this.setState({
      errors: {
        email: !validEmail(this.state.email) && this.state.touched.email,
        password: !validPassword(this.state.password) && this.state.touched.password
      }
    });
  }

  onCancel = () => {
    this.setState({
      email: '',
      password: '',
      touched: {},
      errors: {}
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    loginUser(this.state.email, this.state.password).then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        this.props.history.push('/dashboard');
    }).catch((error) => {
      this.setState({
        submitError: error.response.data.error
      })
    })
  }

  render() {
    return <Login
              onSubmit={this.onSubmit}
              onCancel={this.onCancel}
              onChange={this.onChange}
              onBlur={this.onBlur}
              errors={this.state.errors}
              submitError={this.state.submitError} />
  }
}

export default LoginContainer;
