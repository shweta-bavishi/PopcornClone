import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';

export default class VideoPlayer extends Component {
  render() {
    console.log(this.props.match.params.trailer);
    return (
      <div>
        <Player ref="player" autoPlay>
          <source src={`http://youtube.com/watch?${this.props.match.params.trailer}`} />
          <ControlBar autoHide={false} />
        </Player>
        </div>
    );
  }
}