import React, { Component } from 'react';
import MainView from './mainView';
import Header from './header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1, type:'movies' };
    }
    componentDidMount() {
        this.setState({page:1});
    }
    render() {
        return (
            <div>
            <Header onSelectType={(type) => {this.setState({type})}} />
            <MainView type={this.state.type} page={this.state.page} />
            <ul className="pagination d-flex justify-content-center">
                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                <li className={this.state.page !== 1 ? "waves-effect px-2" : "active px-2"} onClick={() => this.setState({page:1})}>1</li>
                <li className={this.state.page !== 2 ? "waves-effect px-2" : "active px-2"} onClick={() => this.setState({page:2})}>2</li>
                <li className={this.state.page !== 3 ? "waves-effect px-2" : "active px-2"} onClick={() => this.setState({page:3})}>3</li>
                <li className={this.state.page !== 4 ? "waves-effect px-2" : "active px-2"} onClick={() => this.setState({page:4})}>4</li>
                <li className={this.state.page !== 5 ? "waves-effect px-2" : "active px-2"} onClick={() => this.setState({page:5})}>5</li>
                <li className="waves-effect px-2"><i className="material-icons">chevron_right</i></li>
            </ul>
            </div>
        )
    }
}

export default App;