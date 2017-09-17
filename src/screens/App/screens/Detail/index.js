import React, {Component} from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../../redux/books/actions';
import Detail from './layout';

class DetailContainer extends Component {

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
    this.props.dispatch(actionCreators.getBookRents(id));
  }

  handleAddToWishlist = () => {
    this.props.dispatch(actionCreators.addToWishlist({ book_id: this.props.book.id, user_id: this.props.user.id }));
  }

  render() {
    const currentRents = this.props.rents.filter((rent) => rent.returned_at === null);
    const enableWishList = currentRents.size !== 0;
    const userRent = this.props.rents.filter((rent) => rent.user.id === this.props.user.id)[0];
    return <Detail
              book={this.props.book}
              enableWishList={enableWishList}
              userRent={userRent}
              onAddToWishlist={this.handleAddToWishlist} />
  }
}

const mapStateToProps = state => {
  return {
    book: state.books.book,
    rents: state.books.rents,
    userRent: state.books.userRent,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(DetailContainer);
