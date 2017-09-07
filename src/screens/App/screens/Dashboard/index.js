import React from 'react';

import Dashboard from './layout'
import { books } from '../../../../services/bookService';

class DashboardContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = { books }
    this.filter = this.filter.bind(this);
  }

  filter (e) {
    e.preventDefault();
    const type = e.target.children.type.value;
    const value = e.target.children.value.value;
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
