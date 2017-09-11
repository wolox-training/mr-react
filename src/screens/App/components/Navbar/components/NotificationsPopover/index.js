import React from 'react'

import './style.css'
const NotificationsPopover = ({notifications}) => {
  return (
    <div className='notifications-popover'>
      {
        notifications.map(notification => {
          return (
            <div key={notification.id} className='notification-item-popover'>
              <img src={notification.book.image_url} alt='book' className='notification-image'/>
              <div className='notification-info-popover'>
                <span>{notification.text}</span>
                <span className='notification-title'>{notification.book.title}</span>
                <span className='notification-author'>{notification.book.author}</span>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default NotificationsPopover
