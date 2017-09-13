import React from 'react';

import Dashboard from './layout'
import { getAllBooks } from '../../../../services/bookService';

class DashboardContainer extends React.Component {

  state = {
    books: []
  }

  componentWillMount() {
    getAllBooks().then((response) => {
      this.setState({ books: response.data })
    });
  }

  filter = (params) => {
    params.preventDefault();
    const type = params.target.children.type.value;
    const value = params.target.children.value.value;
    const filter = {};
    filter[type] = value;
    getAllBooks(filter).then((response) => { this.setState({ books: response.data }) })
  }

  render() {
    return <Dashboard books={this.state.books} filter={this.filter}/>
  }
};

export default DashboardContainer;
