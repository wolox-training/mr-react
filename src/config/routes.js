import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../screens/App/components/PrivateRoute'
import DashboardContainer from '../screens/App/screens/Dashboard';
import DetailContainer from '../screens/App/screens/Detail';
import LoginContainer from '../screens/App/screens/Login';
import SignUpContainer from '../screens/App/screens/SignUp';
import ProfileContainer from '../screens/App/screens/Profile';

import authService from '../services/authService';

const BooksRouter = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/dashboard' component={DashboardContainer}/>
      <PrivateRoute exact path='/books/:id' component={DetailContainer}/>
      <PrivateRoute exact path='/profile' component={ProfileContainer}/>
      <Route path='/login'
            render={ props => !authService.userAuthenticated() ? <LoginContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
      <Route path='/sign-up'
            render={ props => !authService.userAuthenticated() ? <SignUpContainer {...props} /> : <Redirect to={{ pathname: '/dashboard'}}/> }/>
    </Switch>
  );
}

export default BooksRouter;
