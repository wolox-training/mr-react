import React from 'react';
import { Link } from 'react-router-dom';

import BookDetail from './components/BookDetail';
import {GO_BACK} from './strings';
import './style.css';

const Detail = ({ book, enableWishList, userRent }) => {
  return (
    <div className='detail-container'>
      <Link className='go-back-link' to='/dashboard'> &lt; {GO_BACK}</Link>
      <BookDetail book={book} enableWishList={enableWishList} userRent={userRent}/>
    </div>
  )
}

export default Detail;
