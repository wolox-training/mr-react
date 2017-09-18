import React from 'react';

import './style.css';

import UserInfo from './components/UserInfo';
import UserBooks from './components/UserBooks';
import UserComments from './components/UserComments';

const Profile = ({ user, rents, wishlist }) => {
  return (
    <div className='profile-container'>
      <UserInfo user={user} />
      <UserBooks rents={user.rents} wishlist={user.wishlist} />
      <UserComments comments={user.comments} />
    </div>
  )
}

export default Profile;
