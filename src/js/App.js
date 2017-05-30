import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Github from './Github';

import '../css/App.css';
import '../css/NavLinks.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Aint no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to='/github'>GitHub API</NavLink>
            </li>
            <li>
              <NavLink to='/nasa'>NASA API</NavLink>
            </li>
            <li>
              <NavLink to='/homework'> Homework</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/github' component={Github} />
          <Route render={() => <p>
          To get started, click one of the links above
          </p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
