import React from 'react'
import {loginUser} from '../../../../services/authService'

import Login from './layout'

class LoginContainer extends React.Component {

  state = {
    email: '',
    password: '',
    touched: {
      email: false,
      password: false
    },
    errors: {}
  }

  onBlur = (param) => {
    const name = param.target.name;
    const touched = {...this.state.touched, [name]: true};
    this.setState({
      touched
    }, this.validate)
  }

  validate = () => {
    const validEmail = this.state.email.length && this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const validPassword = this.state.password.length >= 8 && this.state.password.length <= 52;
    this.setState({
      errors: {
        email: !validEmail && this.state.touched.email,
        password: !validPassword && this.state.touched.password
      }
    });
  }

  onInputChange = (param) => {
    const name = param.target.name;
    const value = param.target.value;
    this.setState({
      [name]: value
    }, this.validate);
  }

  onCancel = () => {
    this.setState({
      email: '',
      password: '',
      touched: {
        email: false,
        password: false,
      },
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
              onChange={this.onInputChange}
              onBlur={this.onBlur}
              errors={this.state.errors}
              submitError={this.state.submitError} />
  }
}

export default LoginContainer;
