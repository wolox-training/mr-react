import React from 'react';

import './style.css';

import Book from '../../../shared/Book';
import { READ, WISHLIST, NO_READ_BOOKS, NO_WISHLIST_BOOKS } from '../../strings';

const UserBooks = ({ rents, wishlist }) => {
  return (
    <div className='profile-books-container'>
      <p className='profile-book-title'>{READ}</p>
      <div className='profile-books'>
        {
          rents.length ?
            rents.map((rent) => {
              return <Book book={rent.book} key={rent.book.id} />
            }) :
            <p>{NO_READ_BOOKS}</p>
        }
      </div>
      <p className='profile-book-title'>{WISHLIST}</p>
      <div className='profile-books'>
        {
          wishlist.length ?
            wishlist.map((wish) => {
              return <Book book={wish.book} key={wish.book.id} />
            }) :
            <p>{NO_WISHLIST_BOOKS}</p>
        }
      </div>
    </div>
  )
}

export default UserBooks;
