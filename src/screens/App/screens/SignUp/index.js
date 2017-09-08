import React, {Component} from 'react'

import {signUp} from '../../../../services/authService'
import {validEmail, validPassword, validText} from '../../../../utils/validators'
import {toSnakeCase} from '../../../../utils/stringParsers'

import SignUp from './layout'

class SignUpContainer extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    touched: {},
    errors: {}
  }

  onChange = (param) => {
    const name = param.target.name;
    const value = param.target.value;
    this.setState({
      [name]: value
    }, this.validate);
  }

  onBlur = (param) => {
    const name = param.target.name;
    const touched = {...this.state.touched, [name]: true};
    this.setState({
      touched
    }, this.validate)
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const requireFields = ['email', 'password', 'confirmPassword', 'firstName', 'lastName'];
    const user = requireFields.reduce((obj, key) => {
      obj[toSnakeCase(key)] = this.state[key]
      return obj;
    }, {});
    signUp(user)
      .then((response) => {
        this.props.history.push('/login');
      })
      .catch((error) => {
        this.setState({
          submitError: error.response.data.error
        })
      })
  }

  validate = () => {
    this.setState({
      errors: {
        email: !validEmail(this.state.email) && this.state.touched.email,
        password: !validPassword(this.state.password) && this.state.touched.password,
        confirmPassword: (!validPassword(this.state.confirmPassword) || this.state.confirmPassword !== this.state.password) && this.state.touched.confirmPassword,
        firstName: !validText(this.state.firstName) && this.state.touched.firstName,
        lastName: !validText(this.state.lastName) && this.state.touched.lastName
      }
    });
  }

  render() {
    return <SignUp
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              onBlur={this.onBlur}
              errors={this.state.errors}
              submitError={this.state.submitError} />
  }
}

export default SignUpContainer;
