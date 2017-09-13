import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { setAuthentication } from '../../services/authService'

import './style.css';
import DashboardContainer from './screens/Dashboard'
import Detail from './screens/Detail'
import LoginContainer from './screens/Login'
import SignUpContainer from './screens/SignUp'
import PrivateRoute from './components/PrivateRoute'
import NavbarContainer from './components/Navbar'

class App extends Component {

  userAuthenticated() {
    if (localStorage.getItem('access_token')) {
      setAuthentication();
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        {
          this.userAuthenticated() ? <NavbarContainer /> : null
        }
        <Switch>
          <PrivateRoute exact path='/dashboard' component={DashboardContainer}/>
          <PrivateRoute exact path='/books/:id' component={Detail}/>
          <Route path='/login'
                render={ props => !this.userAuthenticated() ? <LoginContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
          <Route path='/sign-up'
                render={ props => !this.userAuthenticated() ? <SignUpContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
