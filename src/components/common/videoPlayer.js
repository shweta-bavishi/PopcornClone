import React, { Component } from "react";

export default class VideoPlayer extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: window.outerHeight,
      width: window.outerWidth,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const trailerLink = this.props.location.state.trailerLink.split("=");
    return (
      <iframe
        title="Trailer"
        width={opts.width}
        height={opts.height}
        src={`https://www.youtube.com/embed/${trailerLink[1]}`}
        frameBorder="0"
        allowFullScreen
      />
    );
  }
}
