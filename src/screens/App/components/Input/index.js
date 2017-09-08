import React from 'react'

import './style.css'

const Input = ({name, type, text, onChange, onBlur, errorMessage}) => {
  return (
    <div className='login-input-wrapper'>
      <label className='login-label' htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        className={'login-input' + (errorMessage ? ' invalid' : '')}
        onChange={onChange}
        onBlur={onBlur}
        required />
      {
        errorMessage ? <span className='input-span'>{errorMessage}</span> : null
      }
    </div>
  )
}

export default Input;
