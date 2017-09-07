import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.css';
import DashboardContainer from './screens/Dashboard'
import Detail from './screens/Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/dashboard' component={DashboardContainer}/>
          <Route exact path='/books/:id' component={Detail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
