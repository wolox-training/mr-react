import React from 'react';

import defaultBook from '../../../../../../assets/Book/default_book.svg';
import RentButton from './components/RentButton'
import './style.css';

const BookDetail = ({ book, enableWishList, userRent, onAddToWishlist, onRentBook }) => {
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
        <RentButton
          enableWishList={enableWishList}
          userRent={userRent}
          onAddToWishlist={onAddToWishlist}
          onRentBook={onRentBook} />
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
