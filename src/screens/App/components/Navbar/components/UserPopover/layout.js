import React from 'react';
import { Link } from 'react-router-dom';

import {PROFILE, LOG_OUT} from './strings'
import './style.css'

const UserPopover = ({ onLogout }) => {
  return (
    <ul className='user-popover'>
      <Link className='profile-link' to='/profile'>
        <li className='user-popover-action'>{PROFILE}</li>
      </Link>
      <li onClick={onLogout} className='user-popover-action'>{LOG_OUT}</li>
    </ul>
  );
}

export default UserPopover;
