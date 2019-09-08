import React, { Component } from 'react';
import MainView from './mainView';
import Header from './header';
import ReactPaginate from 'react-paginate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1, type:'movies', totalPages: 1 };
    }
    componentDidMount() {
        fetch(`https://tv-v2.api-fetch.website/${this.state.type}`)
        .then(res => res.json())
        .then(
            result => {
            this.setState({ totalPages: result.length });
            },
            error => {
            console.log(error);
            }
        );
    }
    render() {
        return (
            <div>
            <Header onSelectType={(type) => {this.setState({type})}} />
            <MainView type={this.state.type} page={this.state.page} />
            <ul className="pagination d-flex justify-content-center"> 
                <ReactPaginate
                pageCount={this.state.totalPages}
                pageRangeDisplayed={9}
                marginPagesDisplayed={0}
                onPageChange={(event) => {
                    this.setState({page: event.selected + 1});
                }}
                />
            </ul>
            </div>
        )
    }
}

export default App;