import React from 'react'

import './style.css'

const Input = ({ input, label, type, meta }) => {
  return (
    <div className='login-input-wrapper'>
      <label className='login-label' htmlFor={name}>{label}</label>
      <input
        {...input}
        type={type}
        name={name}
        className={'login-input' + (meta.touched && meta.error ? ' invalid' : '')}
        required />
      { meta.touched && meta.error && <span className='input-span'>{meta.error}</span> }
    </div>
  )
}

export default Input;
