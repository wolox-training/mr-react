import React from 'react';
import { Link } from 'react-router-dom';

import BookDetail from './components/BookDetail';
import CommentsContainer from './components/Comments'
import {GO_BACK} from './strings';
import './style.css';

const Detail = ({ book, enableWishList, userRent, onAddToWishlist, onRentBook }) => {
  return (
    <div className='detail-container'>
      <Link className='go-back-link' to='/dashboard'> &lt; {GO_BACK}</Link>
      <BookDetail
        book={book}
        enableWishList={enableWishList}
        userRent={userRent}
        onAddToWishlist={onAddToWishlist}
        onRentBook={onRentBook} />
      <CommentsContainer />
    </div>
  )
}

export default Detail;
