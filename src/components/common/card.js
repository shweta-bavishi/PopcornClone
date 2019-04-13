import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
        this.play720 = this.play720.bind(this);
        this.play1080 = this.play1080.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      play720() {
          console.log(this.props.torrent.en);
      }
      play1080() {
        console.log(this.props.torrent.en);
    }
    render() {
        const {name, image, synopsis, genres, rating, trailer, torrent} = this.props;
        const trailerLink = trailer.split('?')[1];
        const defaultImage = 'https://media.comicbook.com/files/img/default-movie.png';
        return (
            <div className="col-3 p-2">
                <div className="card" key={this.props.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={image.banner || image.fanart || image.poster || defaultImage} />
                    </div>
                    <div className="card-content">
                        <span className="activator grey-text text-darken-4"> {name} </span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title">{name} <i className="material-icons right"> close </i> </span>
                        <div className="row"> <p className="font-weight-light activator grey-text text-darken-4">{synopsis} </p> </div>
                        <div className="row"> <p className="activator grey-text text-capitalize text-darken-4">{genres.join(', ')} </p> </div>
                        <div className="row"> <p className="activator grey-text text-capitalize text-darken-4">IMDB Rating : {rating.percentage/10} </p> </div>
                        <div className="row">
                            <Link className="col mx-2 " to ={`/movie/${trailerLink}`} ><button className="btn waves-effect waves-light" name="action">Trailer </button></Link>
                            <button className="col btn waves-effect waves-light" type="submit" name="action" onClick={this.toggle}>Movie</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    Which movie you wish to see?
                                </ModalHeader>
                                <ModalFooter className="row">
                                    <Button color="primary" className="col mx-2" onClick={this.play720}>720px</Button>
                                    <Link className="col mx-2 " to ={`/watchMovie/`} ><Button color="secondary" className="col mx-2" onClick={this.play1080}>1080px</Button></Link>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;