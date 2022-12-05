import React, { Component } from 'react';
import HomeOffline from './HomeOffline';
import HomeOnline from './HomeOnline';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.isLogged ? <HomeOnline language={this.props.language} /> : <HomeOffline language={this.props.language} /> }
            </div>
        );
    }
}

export default Home;