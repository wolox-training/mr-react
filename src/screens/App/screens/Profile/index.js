import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from './layout';

import { actionCreators } from '../../../../redux/auth/actions';

class ProfileContainer extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getCurrentUser())
      .then(() => {
        this.props.dispatch(actionCreators.getUserWishlist(this.props.user.id));
        this.props.dispatch(actionCreators.getUserRents(this.props.user.id));
        this.props.dispatch(actionCreators.getUserComments(this.props.user.id));
      });
  }
  render () {
    return <Profile user={this.props.user}/>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(ProfileContainer);
