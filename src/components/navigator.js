import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./app";
import VideoPlayer from "./common/videoPlayer";
import MoviePlayer from "./common/moviePlayer";

class Navigator extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie" component={VideoPlayer} />
            <Route path="/watchMovie" component={MoviePlayer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigator;
