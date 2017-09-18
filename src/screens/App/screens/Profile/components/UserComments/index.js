import React from 'react';

import UserComment from '../../../shared/UserComment';

import './style.css';

const UserComments = ({ comments }) => {
  return (
    <div className='profile-comments-container'>
      {
        comments.map((comment) => {
          return <UserComment comment={comment} key={comment.id} showBookTitle={true}/>
        })
      }
    </div>
  )
}

export default UserComments;
