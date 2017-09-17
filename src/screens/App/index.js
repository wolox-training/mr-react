import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store, { history } from '../../redux/store';
import { actionCreators } from '../../redux/auth/actions';
import authService from '../../services/authService';

import './style.css';
import BooksRouter from '../../config/routes';
import NavbarContainer from './components/Navbar';

class App extends Component {

  componentWillMount () {
    if (authService.userAuthenticated()) store.dispatch(actionCreators.getCurrentUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <NavbarContainer />
            <BooksRouter {...this.props} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
