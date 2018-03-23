/**
 * User yuluhuang
 * Date 18/3/23
 * Time 16:08
 */
import React, {Component} from 'react';
class Result extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    votesAngularInPercent () {
        if (this.store.getState().angular) {
            return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
        } else {
            return 0
        }
    }

    votesReactInPercent () {
        if (this.store.getState().react) {
            return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
        } else {
            return 0
        }
    }

    votesVuejsInPercent () {
        if (this.store.getState().vuejs) {
            return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
        } else {
            return 0
        }
    }

    votesAngularInPercentStyle () {
        return {
            width: this.votesAngularInPercent() + '%'
        }
    }
    votesReactInPercentStyle() {
        return {
            width: this.votesReactInPercent() + '%'
        }
    }
    votesVuejsInPercentStyle() {
        return {
            width: this.votesVuejsInPercent() + '%'
        }
    }

    render() {
        return (
            <div>
                <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped active">
                    <div className="progress-bar bg-danger" style={this.votesAngularInPercentStyle()}>
                    </div>
                </div>


                <span className="label label-success">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped ">
                    <div className="progress-bar bg-success" style={this.votesReactInPercentStyle()}>
                    </div>
                </div>



                <span className="label label-info">Vuejs: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
                <div className="progress progress-striped ">
                    <div className="progress-bar bg-info" style={this.votesVuejsInPercentStyle()}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result