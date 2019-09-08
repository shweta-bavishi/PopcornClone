import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const {
      name,
      image,
      synopsis,
      genres,
      rating,
      trailer,
      torrent
    } = this.props;
    const trailerLink = trailer && trailer.split("?")[1];
    const torrentEn = torrent && torrent.en;
    const torrentArr = torrentEn && Object.values(torrentEn);
    const defaultImage =
      "https://media.comicbook.com/files/img/default-movie.png";
    return (
      <div className="col-3 p-2">
        <div className="card" key={this.props.id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              src={image.banner || image.fanart || image.poster || defaultImage}
            />
          </div>
          <div className="card-content">
            <span className="activator grey-text text-darken-4"> {name} </span>
          </div>
          <div className="card-reveal">
            <span className="card-title">
              {name} <i className="material-icons right"> close </i>{" "}
            </span>
            <div className="row">
              {" "}
              <p className="font-weight-light activator grey-text text-darken-4">
                {synopsis}{" "}
              </p>{" "}
            </div>
            <div className="row">
              {" "}
              <p className="activator grey-text text-capitalize text-darken-4">
                {genres && genres.join(", ")}{" "}
              </p>{" "}
            </div>
            <div className="row">
              {" "}
              <p className="activator grey-text text-capitalize text-darken-4">
                IMDB Rating : {rating.percentage / 10}{" "}
              </p>{" "}
            </div>
            <div className="row">
              {trailerLink ? (
                <Link
                  className="col mx-2 "
                  to={{
                    pathname: `/movie`,
                    state: {
                      trailerLink
                    }
                  }}
                >
                  <button
                    className="btn waves-effect waves-light"
                    name="action"
                  >
                    Trailer
                  </button>
                </Link>
              ) : null}
              {torrentArr ? (
                <a href={torrentArr[0].url}>
                  <button
                    className="col btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.toggle}
                  >
                    Movie
                  </button>
                  </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
