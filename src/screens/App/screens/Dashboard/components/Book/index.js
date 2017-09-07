import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'
import defaultBook from '../../../../../../assets/Book/default_book.svg'

const Book = ({book}) => {
  return (
    <div className='book'>
      <Link className='book-link' to={`/books/${book.id}`}>
        <div className='book-image-box'>
          <img src={book.image_url || defaultBook} alt={book.title} className='book-image' />
        </div>
        <p className='title'>{book.title}</p>
        <p className='author'>{book.author}</p>
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
