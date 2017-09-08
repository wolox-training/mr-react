import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './style.css';
import DashboardContainer from './screens/Dashboard'
import Detail from './screens/Detail'
import LoginContainer from './screens/Login'
import SignUpContainer from './screens/SignUp'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/dashboard' component={DashboardContainer}/>
          <PrivateRoute exact path='/books/:id' component={Detail}/>
          <Route path='/login'
                render={ props => !localStorage.getItem('access_token') ? <LoginContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
          <Route path='/sign-up'
                render={ props => !localStorage.getItem('access_token') ? <SignUpContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
