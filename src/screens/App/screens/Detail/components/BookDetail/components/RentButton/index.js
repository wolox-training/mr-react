import React from 'react';

import moment from 'moment';

import { RENT, WISHLIST, NOT_AVAILABLE, RETURN_DATE } from './strings';
import './style.css';

const RentButton = ({userRent, enableWishList, onAddToWishlist, onRentBook}) => {
  if (userRent) {
    return (
      <div className='rent-button-container'>
        <span>{`${RETURN_DATE} ${moment(userRent.to, 'YYYY-mm-DD').format('DD/mm/YYYY')}`}</span>
        <button disabled type='button' className='book-button rent-button'>{RENT}</button>
      </div>
    )
  } else if (enableWishList) {
    return (
      <div className='rent-button-container'>
        <span className='not-available-span'>{NOT_AVAILABLE}</span>
        <button type='button' className='book-button wishlist-button' onClick={onAddToWishlist}>{WISHLIST}</button>
      </div>
    )
  } else {
    return <button type='button' className='book-button rent-button' onClick={onRentBook}>{RENT}</button>
  }
}

export default RentButton;
