import React from 'react';

import {PROFILE, LOG_OUT} from './strings'
import './style.css'

const UserPopover = ({onLogout}) => {
  return (
    <ul className='user-popover'>
      <li className='user-popover-action'>{PROFILE}</li>
      <li onClick={onLogout} className='user-popover-action'>{LOG_OUT}</li>
    </ul>
  );
}

export default UserPopover;
