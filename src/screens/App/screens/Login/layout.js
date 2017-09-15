import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../components/Input/'
import { PASSWORD, EMAIL, ACCEPT, CANCEL } from '../../../../utils/strings';
import { loginValidation } from '../../../../utils/formValidations';


import { SIGN_IN } from './strings'
import './style.css'

const Login = ({ handleSubmit, pristine, reset, submitting, validate, loginError }) => {
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1 className='login-title'>{SIGN_IN}</h1>
        { loginError && <h1 className='login-error'>{loginError}</h1> }
        <Field
          name='email'
          type='email'
          label={EMAIL}
          component={Input} />
        <Field
          name='password'
          type='password'
          label={PASSWORD}
          component={Input} />
        <div className='buttons-container'>
          <button disabled={ submitting } type='button' className='cancel-button form-button' onClick={reset} >{CANCEL}</button>
          <button disabled={ pristine || submitting } type='submit' className='accept-button form-button'>{ACCEPT}</button>
        </div>
      </form>
    </div>
  )
};

export default reduxForm({ form: 'login-form', validate: loginValidation })(Login);
