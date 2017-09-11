import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

import UserPopover from './layout';

class UserPopoverContainer extends Component {

  logout = () => {
    localStorage.removeItem('access_token');
    this.props.history.push('/login');
  }

  render() {
      return <UserPopover onLogout={this.logout}/>
  }
}

export default withRouter(UserPopoverContainer);
