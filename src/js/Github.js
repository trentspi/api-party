import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../css/Github.css';

class Github extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    const username = ev.currentTarget.value;
    this.setState({ username });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.history.push(`/github/${this.state.username}`);
  }

  render () {
    return (
      <div className="github">
        <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" value={this.state.username} onChange={this.handleChange}/>
          </div>
          <div>
            <button type="submit">Look up github user</button>
          </div>
        </form>

        <Route exact path='/github' render={() => (
          <h3>Please enter a username to search on Github</h3>
        )} />
      </div>
    )
  }
}

export default Github;
