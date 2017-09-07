import React from 'react';

import './style.css';
import Book from './components/Book'
import Filter from './components/Filter'

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Filter filter={props.filter}/>
      <div className="book-list-container">
        {
          props.books.map((book) => {
            return <Book book={book} key={book.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Dashboard;
