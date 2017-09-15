import React from 'react';

import defaultBook from '../../../../../../assets/Book/default_book.svg';

import './style.css';
import { RENT, WISHLIST } from './strings';

const BookDetail = ({ book, enableWishList, userRent }) => {
  return (
    <div className='detail-book'>
      <div className='detail-book-image-box'>
        <img src={book.image_url || defaultBook} alt={book.title} className='detail-book-image' />
      </div>
      <div className='detail-information'>
        <p className='detail-title'>{book.title}</p>
        <p className='detail-author detail-text'>{book.author}</p>
        <p className='detail-text'>{book.year}</p>
        <p className='detail-text'>{book.genre}</p>
        {
          userRent && <h1>{userRent.to}</h1>
        }
        {
          enableWishList && !userRent ?
            (
              <div>
                <h3>No se encuentra disponible</h3>
                <button type='button' className='book-button wishlist-button'>{WISHLIST}</button>
              </div>
            ):
            <button type='button' className='book-button rent-button'>{RENT}</button>
        }

      </div>
    </div>
  )
}

BookDetail.propTypes = {
  book: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string
  })
}

export default BookDetail;
