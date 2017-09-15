import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../components/Input/';
import { signUpValidation } from '../../../../utils/formValidations';
import { PASSWORD, EMAIL, ACCEPT, CANCEL } from '../../../../utils/strings';

import {SIGN_UP, PASSWORD_CONFIRMATION, FIRST_NAME, LAST_NAME} from './strings';

import './style.css'

const SignUp = ({ handleSubmit, pristine, reset, submitting, validate, signUpError }) => {
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h1 className='login-title'>{SIGN_UP}</h1>
        { signUpError && <h1 className='login-error'>{signUpError}</h1> }
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
        <Field
          name='confirmPassword'
          type='password'
          label={PASSWORD_CONFIRMATION}
          component={Input} />
        <Field
          name='firstName'
          type='text'
          label={FIRST_NAME}
          component={Input} />
        <Field
          name='lastName'
          type='text'
          label={LAST_NAME}
          component={Input} />
        <div className='buttons-container'>
          <button type='button' disabled={ submitting } className='cancel-button form-button' onClick={reset}>{CANCEL}</button>
          <button type='submit' disabled={ pristine || submitting } className='accept-button form-button'>{ACCEPT}</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({ form: 'signup-form', validate: signUpValidation })(SignUp);
