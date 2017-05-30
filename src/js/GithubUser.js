import React, {Component} from 'react';

class GithubUser extends Component {
  state = {
    user: {
      avatar_url: '',
      login: '',
      followers: '',
      following: '',
      location: '',
      html_url: ''
    }
  }

  constructor(props) {
    super(props);
    this.fetchUserData();
  }

  fetchUserData = () => {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
    .then(response => response.json())
    .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state;
    return (
      <div className="github-user">
        <a href={user.html_url} target="_"><img src={user.avatar_url} alt="Github avatar" /></a>
        <h2>{user.login}</h2>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
      </div>
    )
  }
}

export default GithubUser;
