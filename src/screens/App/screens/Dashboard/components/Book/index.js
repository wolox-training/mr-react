import React from 'react';

import './style.css'
import defaultBook from '../../../../../../assets/Book/default_book.svg'

const Book = (props) => {
  return (
    <div className='book'>
      <div className='book-image-box'>
        <img src={props.imageUrl || defaultBook} alt={props.title} className="book-image" />
      </div>
      <p className="title">{props.title}</p>
      <p className="author">{props.author}</p>
    </div>
  )
}

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string
}

export default Book;
