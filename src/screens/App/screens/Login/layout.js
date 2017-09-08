import React from 'react'

import Input from './Input/'
import {PASSWORD, EMAIL, SIGN_IN, ACCEPT, CANCEL, ERROR_EMAIL, ERROR_PASSWORD} from './strings'
import './style.css'

const Login = ({onSubmit, onCancel, onChange, onBlur, errors, submitError}) => {
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={onSubmit}>
        <h1 className='login-title'>{SIGN_IN}</h1>
        {
          submitError ? <h1 className='login-error'>{submitError}</h1> : null
        }
        <Input
          name='email'
          type='email'
          text={EMAIL}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.email ? ERROR_EMAIL : null} />
        <Input
          name='password'
          type='password'
          text={PASSWORD}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.password ? ERROR_PASSWORD : null} />
        <div className='buttons-container'>
          <button type='button' className='cancel-button form-button' onClick={onCancel}>{CANCEL}</button>
          <button disabled={errors.email || errors.password} type='submit' className='accept-button form-button'>{ACCEPT}</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
