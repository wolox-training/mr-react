import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';

import './style.css';
import BooksRouter from './components/BooksRouter';
import NavbarContainer from './components/Navbar';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavbarContainer />
          <BooksRouter {...this.props} />
        </div>
      </Provider>
    );
  }
}

export default App;
