import React from 'react'

import './style.css'

const Filter = (props) => {
  return (
    <form onSubmit={props.filter} className='filter-container'>
      <select name='type' className='filter'>
        <option disabled defaultValue> Seleccionar filtro.. </option>
        <option value='title'>Nombre</option>
        <option value='author'>Autor</option>
      </select>
      <input name='value' className='filter' placeholder='Buscar..' type='text'/>
      <button className='search-button' type='submit'/>
    </form>
  )
}

export default Filter;
