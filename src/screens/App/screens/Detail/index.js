import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BookDetail from './components/BookDetail';
import {GO_BACK} from './strings';
import './style.css';

import { actionCreators } from '../../../../redux/books/actions';

class Detail extends Component {

  state = {
    book: {
      title: '',
      author: '',
      imageUrl: ''
    }
  }

  componentWillMount() {
    const id = parseInt(this.props.match.params.id, 10);
    this.props.dispatch(actionCreators.getBookDetail(id));
  }

  render() {
    return (
      <div className='detail-container'>
        <Link className='go-back-link' to='/dashboard'> &lt; {GO_BACK}</Link>
        <BookDetail book={this.props.book} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    book: state.books.book
  }
}

export default connect(mapStateToProps)(Detail);
