import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './layout';

import { actionCreators } from '../../../../redux/books/actions'

class DashboardContainer extends Component {

  componentWillMount() {
    this.props.dispatch(actionCreators.getBooks({}));
  }

  onFilter = (params) => {
    params.preventDefault();
    const type = params.target.children.type.value;
    const value = params.target.children.value.value;
    const filter = {};
    filter[type] = value;
    this.props.dispatch(actionCreators.getBooks(filter))
  }

  render() {
    return <Dashboard onFilter={this.onFilter} books={this.props.books}/>
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps)(DashboardContainer)
