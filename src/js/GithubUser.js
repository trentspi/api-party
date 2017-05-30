import React, {Component} from 'react';

import '../css/GithubUser.css';

class GithubUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: '',
      public_repos: ''

    }
  }

  constructor(props) {
    super(props);
    this.fetchUserData(props);
  }

  fetchUserData = (props) => {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
    .then(response => response.json())
    .then(user => this.setState({ user }))

  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if(locationChanged) {
      this.fetchUserData(nextProps);
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className="github-user">
        <a href={user.html_url} target="_"><img src={user.avatar_url} alt="Github avatar" /></a>
        <h2>{user.login}</h2>
        <h3>repositories: {user.public_repos}</h3>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
      </div>
    )
  }
}

export default GithubUser;
