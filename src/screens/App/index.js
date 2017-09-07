import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.css';
import DashboardContainer from './screens/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={DashboardContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
