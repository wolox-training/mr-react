import React from 'react'

import Navbar from './layout'

import { notifications } from '../../../../services/notificationsService.js';

class NavbarContainer extends React.Component {
  state = {
    showUserPopover: false,
    showNotificationPopover: false
  }

  toggleUserPopover = () => {
    this.setState({
      showUserPopover: !this.state.showUserPopover
    })
  }

  toggleNotificationsPopover = () => {
    this.setState({
      showNotificationPopover: !this.state.showNotificationPopover
    })
  }

  render() {
      return <Navbar
        userPopover={this.state.showUserPopover}
        notificationsPopover={this.state.showNotificationPopover}
        onUserClick={this.toggleUserPopover}
        onNotificationClick={this.toggleNotificationsPopover}
        notifications={notifications}/>
  }

}

export default NavbarContainer;
