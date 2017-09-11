import React from 'react'

import { Link } from 'react-router-dom'

import UserPopoverContainer from './components/UserPopover'
import NotificationsPopover from './components/NotificationsPopover'

import booksLogo from '../../../../assets/navbar/wbooks_logo.svg'
import notificationsLogo from '../../../../assets/navbar/notifications.svg'
import addBookLogo from '../../../../assets/navbar/add_book.svg'
import userImage from '../../../../assets/navbar/user.png'

import './style.css'

const Navbar = ({onUserClick, userPopover, notificationsPopover, onNotificationClick, notifications}) => {
  return (
    <div className='navbar-container'>
      <Link className='book-link' to='/dashboard'>
        <img src={booksLogo} alt='WBooks' className='logo-img'/>
      </Link>
      <div className='user-buttons'>
        <div className='navbar-with-popover'>
          <img src={notificationsLogo} alt='Notifications' onClick={onNotificationClick} className='navbar-img'/>
          {
            notificationsPopover ? <NotificationsPopover notifications={notifications}/> : null
          }
        </div>
        <img src={addBookLogo} alt='Addbook' className='navbar-img'/>
        <div className='navbar-with-popover'>
          <img src={userImage} alt='user' onClick={onUserClick} className='navbar-img user-img'/>
          {
            userPopover ? <UserPopoverContainer /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
