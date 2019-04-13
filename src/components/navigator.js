import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './app';
import VideoPlayer from './common/videoPlayer';
import MoviePlayer from './common/moviePlayer';

class Navigator extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={App} />
              <Route path="/movie/:trailer" component={VideoPlayer} />
              <Route path="/watchMovie/" component={MoviePlayer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigator;