import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { getBook } from '../../../../services/bookService'
import BookDetail from './components/BookDetail'
import {GO_BACK} from './strings'
import './style.css'

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
    getBook(id).then((response) => this.setState({ book: response.data }))
  }

  render() {
    return (
      <div className='detail-container'>
        <Link className='go-back-link' to='/dashboard'> &lt; {GO_BACK}</Link>
        <BookDetail book={this.state.book} />
      </div>
    )
  }
}

export default Detail;
