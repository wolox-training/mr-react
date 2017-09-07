import React, { Component } from 'react';
import './style.css';
import DashboardContainer from './screens/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardContainer />
      </div>
    );
  }
}

export default App;
