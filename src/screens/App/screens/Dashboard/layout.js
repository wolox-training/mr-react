import React, { PropTypes } from 'react';

import './style.css';
import Book from './components/Book';
import Filter from './components/Filter';

const Dashboard = ({ onFilter, books }) => {
  return (
    <div className="dashboard">
      <Filter onFilter={onFilter}/>
      <div className="book-list-container">
        {
          books.map((book) => {
            return <Book book={book} key={book.id}/>
          })
        }
      </div>
    </div>
  )
}


Dashboard.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      imageUrl: React.PropTypes.string
    }).isRequired
  ).isRequired,
  onFilter: PropTypes.func.isRequired
}

export default Dashboard;
