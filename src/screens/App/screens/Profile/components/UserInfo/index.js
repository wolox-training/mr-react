import React from 'react';

import './style.css';
import { READ, COMMENTS } from '../../strings';

import userImage from '../../../../../../assets/navbar/user.png';

const UserInfo = ({ user }) => {
  return (
    <div className='user-data-container'>
      <img className='profile-user-image' src={userImage} alt='user' />
      <div className='profile-user-info'>
        <p className='profile-name'>{`${user.first_name} ${user.last_name}`}</p>
        <p className='profile-email'>{user.email}</p>
        <div className='profile-counters'>
          <p>{`${user.rents_counter} ${READ}`}</p>
          <hr className='counter-separator' />
          <p>{`${user.comments_counter} ${COMMENTS}`}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
