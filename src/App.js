import React, {Component} from 'react';
import {voteReact, voteAngular, voteVuejs} from './actions'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
    }

    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    }

    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign': 'center'}}>
                   
                    <h2>What is your favority front-end framework in 2017</h2>
                    <h4>Click on the logos below to vote!</h4>
                    <br/>

                    <div className="row">
                        <div className="offset-3 col-xs-2">
                            <img src="angular.svg" height="96"  alt="Angular" onClick={this.handleVoteAngular}/>
                        </div>


                        <div className="col-xs-2">
                            <img src="react.svg" height="96"  alt="React" onClick={this.handleVoteReact}/>
                        </div>


                        <div className="col-xs-2">
                            <img src="vue.svg" height="96"  alt="Vuejs" onClick={this.handleVoteVuejs}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
