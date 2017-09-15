import React from 'react'

import './style.css'
import {FILTER_SELECT, NAME, AUTHOR, SEARCH} from './strings'

const Filter = ({ onFilter }) => {
  return (
    <form onSubmit={onFilter} className='filter-container'>
      <select name='type' className='filter'>
        <option disabled defaultValue>{FILTER_SELECT}</option>
        <option value='title'>{NAME}</option>
        <option value='author'>{AUTHOR}</option>
      </select>
      <input name='value' className='filter' placeholder={SEARCH} type='text'/>
      <button className='search-button' type='submit'/>
    </form>
  )
}

export default Filter;
