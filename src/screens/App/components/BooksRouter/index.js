import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'
import DashboardContainer from '../../screens/Dashboard';
import Detail from '../../screens/Detail';
import LoginContainer from '../../screens/Login';
import SignUpContainer from '../../screens/SignUp';

import { userAuthenticated } from '../../../../services/authService';

const BooksRouter = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/dashboard' component={DashboardContainer}/>
      <PrivateRoute exact path='/books/:id' component={Detail}/>
      <Route path='/login'
            render={ props => !userAuthenticated() ? <LoginContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
      <Route path='/sign-up'
            render={ props => !userAuthenticated() ? <SignUpContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
    </Switch>
  )
}

export default BooksRouter;
