import React, { Component } from "react";

export default class MoviePlayer extends Component {
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      var WebTorrent = require("webtorrent");

      var client = new WebTorrent();
      console.log(this.props.location.state.torrentURL);
      // Sintel, a free, Creative Commons movie
      var torrentId = this.props.location.state.torrentURL;
      client.add(
        torrentId,

        function(torrent) {
          console.log(torrent);
          // Torrents can contain many files. Let's use the .mp4 file
          var file = torrent.files.find(function(file) {
            console.log(file);
            return file.name.endsWith(".mp4");
          });

          // Display the file by adding it to the DOM.
          // Supports video, audio, image files, and more!
          file.appendTo("body");
        }
      );
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.state.name}</h1>
      </div>
    );
  }
}
