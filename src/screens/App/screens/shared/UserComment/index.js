import React from 'react';
import { Link } from 'react-router-dom';

import userImage from '../../../../../assets/navbar/user.png';
import { formattedDate } from '../../../../../utils/dateFormatter';
import './style.css'

const UserComment = ({ comment, showBookTitle }) => {
  return (
    <div className='comment-container'>
      <img className='comment-user-img' src={userImage} alt='user' />
      <div className='comment-info-container'>
        <div className='name-title-container'>
          <span className='user-name'>{`${comment.user.first_name} ${comment.user.last_name}`}</span>
          <Link to={`/books/${comment.book.id}`} className='book-title-link'>
            <span>{comment.book.title}</span>
          </Link>
        </div>
        <p className='comment-date'>{formattedDate(comment.created_at)}</p>
        <p className='comment-text-info'>{comment.content}</p>
      </div>
    </div>
  )
}

export default UserComment;
