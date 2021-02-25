import React, {Component} from 'react'
import { connect } from 'react-redux'
import LoginPage from '../LoginPage'
import FlightsPage from '../FlightsPage'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: window.sessionStorage.getItem('isLoggedIn')
        }
    }

    render() {
        return (
             <div className='app'>
                 {!this.props.loggedIn && <LoginPage />}
                 {this.props.loggedIn && <FlightsPage />}
             </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(App);
