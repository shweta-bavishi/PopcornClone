import React, { Component } from 'react';

export default class MoviePlayer extends Component {
    componentDidMount() {
        // Sintel, a free, Creative Commons movie
        var magnetURI = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
    
        var WebTorrent = require('webtorrent');
        var client = new WebTorrent();
    
        client.add(magnetURI, (torrent) => {
          console.log('Client is downloading:', torrent.infoHash)
          torrent.on('done', () => {
            console.log('Progress: 100%');
          })
    
          var file = torrent.files.find(function(file) {
            return file.name.endsWith(".mp4");
          });
      
          // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
          file.appendTo("body");
    
        });
      }
    
      render() {
        return (
          <div>
            <h1>Loading</h1>
          </div>
        );
      }
}