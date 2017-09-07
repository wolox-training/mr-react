import React from 'react';

import Dashboard from './layout'
import { books } from '../../../../services/bookService';

class DashboardContainer extends React.Component {
  state = { books }

  filter = (params) => {
    params.preventDefault();
    const type = params.target.children.type.value;
    const value = params.target.children.value.value;
    this.setState({
      books: books.filter((book) => {
        return type === 'title' ? book.title.toLowerCase().includes(value) : book.author.toLowerCase().includes(value);
      })
    })
  }

  render() {
    return <Dashboard books={this.state.books} filter={this.filter}/>
  }
};

export default DashboardContainer;
