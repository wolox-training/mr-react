import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store, { history } from '../../redux/store';

import './style.css';
import BooksRouter from './components/BooksRouter';
import NavbarContainer from './components/Navbar';

class App extends Component {

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
