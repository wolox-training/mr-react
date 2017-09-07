import React from 'react';

import './style.css'
import defaultBook from '../../../../../../assets/Book/default_book.svg'

const BookDetail = (props) => {
  return (
    <div className='detail-book'>
      <div className='detail-book-image-box'>
        <img src={props.book.image_url || defaultBook} alt={props.book.title} className='detail-book-image' />
      </div>
      <div className='detail-information'>
        <p className='detail-title'>{props.book.title}</p>
        <p className='detail-author detail-text'>{props.book.author}</p>
        <p className='detail-text'>{props.book.year}</p>
        <p className='detail-text'>{props.book.genre}</p>
        <button type='button' className='rent-button'>Alquilar</button>
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
