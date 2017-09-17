import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../../../../redux/books/actions';
import Comments from './layout';

class CommentsContainer extends Component {

  addComment = (values) => {
    this.props.dispatch(actionCreators.addBookComment({book_id: this.props.book.id, user_id: this.props.user.id, content: values.content }))
  }

  render () {
    return <Comments onSubmit={this.addComment} comments={this.props.comments} />
  }
}

const mapStateToProps = state => {
  return {
    comments: state.books.comments,
    book: state.books.book,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(CommentsContainer);
