import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Index from './components/Layout/Index';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>     
    );
  }
}

export default App;
