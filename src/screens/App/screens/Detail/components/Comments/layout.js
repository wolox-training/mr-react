import React from 'react';

import './style.css';
import { COMMENTS } from './strings';

import AddComment from './components/AddComment';
import UserComment from '../../../shared/UserComment';

const Comments = ({ onSubmit, comments }) => {
  return (
    <div className="detail-comments">
      <h3 className="comments-title">{COMMENTS}</h3>
      <AddComment onSubmit={onSubmit} />
      {
        comments.slice(0,4).map((comment) => {
          return <UserComment comment={comment} key={comment.id} showBookTitle={true}/>
        })
      }
    </div>
  )
}

export default Comments;
