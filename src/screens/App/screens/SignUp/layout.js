import React from 'react'

import Input from '../../components/Input/'
import {PASSWORD, EMAIL, ACCEPT, CANCEL, ERROR_EMAIL, ERROR_PASSWORD} from '../../../../utils/strings'

import {SIGN_UP, ERROR_TEXT, PASSWORD_CONFIRMATION, FIRST_NAME, LAST_NAME, ERROR_PASSWORD_CONFIRMATION} from './strings'
import './style.css'

const SignUp = ({onSubmit, onChange, onBlur, errors, submitError}) => {
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={onSubmit}>
        <h1 className='login-title'>{SIGN_UP}</h1>
        {
          submitError ? <h1 className='login-error'>{submitError}</h1> : null
        }
        <Input
          name='email'
          type='email'
          text={EMAIL}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.email ? ERROR_EMAIL : null}/>
        <Input
          name='password'
          type='password'
          text={PASSWORD}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.password ? ERROR_PASSWORD : null} />
        <Input
          name='confirmPassword'
          type='password'
          text={PASSWORD_CONFIRMATION}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.confirmPassword ? ERROR_PASSWORD_CONFIRMATION : null} />
        <Input
          name='firstName'
          type='text'
          text={FIRST_NAME}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.firstName ? ERROR_TEXT: null} />
        <Input
          name='lastName'
          type='text'
          text={LAST_NAME}
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errors.lastName ? ERROR_TEXT : null} />
        <div className='buttons-container'>
          <button type='button' className='cancel-button form-button'>{CANCEL}</button>
          <button type='submit' disabled={Object.keys(errors).some(key => errors[key])} className='accept-button form-button'>{ACCEPT}</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
