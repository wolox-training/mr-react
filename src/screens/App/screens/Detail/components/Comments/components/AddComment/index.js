import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { ACCEPT } from '../../../../../../../../utils/strings';
import { commentValidation } from '../../../../../../../../utils/formValidations';
import userImage from '../../../../../../../../assets/navbar/user.png';

import './style.css';
import {ADD_COMMENT} from './strings'

const AddComment = ({ handleSubmit, pristine, submitting}) => {
  return (
    <div className='add-comment-container'>
      <img className='comment-user-img' src={userImage} alt='user' />
      <form className='comment-form' onSubmit={handleSubmit}>
        <h4 className='add-comment-title'>{ADD_COMMENT}</h4>
        <Field
          className='comment-text'
          name='content'
          component="textarea" />
        <button type="submit" className='add-comment-button' disabled={pristine || submitting}>{ACCEPT}</button>
      </form>
    </div>
  )
}

export default reduxForm({ form: 'comment-form', validate: commentValidation })(AddComment);
