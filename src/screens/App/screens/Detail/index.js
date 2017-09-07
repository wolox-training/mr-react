import React from 'react'
import { Link } from 'react-router-dom'
import {books} from '../../../../services/bookService'
import BookDetail from './components/BookDetail'
import {GO_BACK} from './strings'
import './style.css'

const Detail = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const book = books.find((book) => book.id === id);
  return (
    <div className='detail-container'>
      <Link className='go-back-link' to='/dashboard'> &lt; {GO_BACK}</Link>
      <BookDetail book={book} />
    </div>
  )
}

export default Detail;
