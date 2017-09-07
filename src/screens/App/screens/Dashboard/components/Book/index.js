import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'
import defaultBook from '../../../../../../assets/Book/default_book.svg'

const Book = (props) => {
  return (
    <div className='book'>
      <Link className='book-link' to={`/books/${props.book.id}`}>
        <div className='book-image-box'>
          <img src={props.book.image_url || defaultBook} alt={props.book.title} className='book-image' />
        </div>
        <p className='title'>{props.book.title}</p>
        <p className='author'>{props.book.author}</p>
      </Link>

    </div>
  )
}

Book.propTypes = {
  book: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string
  })
}

export default Book;
