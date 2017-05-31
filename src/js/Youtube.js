import React, { Component } from 'react';
import YouTube from 'react-youtube';

import '../css/YouTube.css';

class Youtube extends Component {
  state = {
    url: 'Lty7RAHKT9E'
  }

  handleChange = (ev) => {
    const url = ev.currentTarget.value;
    this.setState({ url });
    this.props.history.push(`/youtube/${url}`);
  }

  render() {
    //this.props.history.push(`/youtube/${this.state.url}`);
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="YouTube">
        <YouTube
          videoId={this.state.url}
          opts={opts}
          onReady={this._onReady}
        />
        <div>
          <h3> Enter a YouTube video ID below </h3>
        </div>
        <div>
          <input type="text" value={this.state.url} onChange={this.handleChange} placeholder="Enter a YouTube video ID" />
        </div>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Youtube;
