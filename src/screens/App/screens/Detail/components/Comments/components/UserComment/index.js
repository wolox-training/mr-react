import React from 'react';
import moment from 'moment';

import userImage from '../../../../../../../../assets/navbar/user.png';
import './style.css'

const UserComment = ({ comment }) => {
  return (
    <div className='comment-container'>
      <img className='comment-user-img' src={userImage} alt='user' />
      <div className='comment-info-container'>
        <p className='user-name'>{`${comment.user.first_name} ${comment.user.last_name}`}</p>
        <p className='comment-date'>{moment(comment.created_at).format('DD/MM/YYYY')}</p>
        <p className='comment-text-info'>{comment.content}</p>
      </div>
    </div>
  )
}

export default UserComment;
