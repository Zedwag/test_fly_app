import React, {Component} from 'react'
import { connect } from 'react-redux'
import {logOut} from '../../redux/actions'
import FlightsForm from '../FlightsForm'
import logoutIcon from '../../img/logout.png'
import './FlightsPage.css'

class FlightsPage extends Component {

    logoutButtonClickHandler = event => {
        this.props.logOut()
        window.sessionStorage.removeItem('isLoggedIn')
    }

    render() {
        return (
            <div className="flights-page">
                <div className="logout-wrapper">
                    Выйти
                    <img src={logoutIcon} alt="logout icon" className="logout-button" onClick={this.logoutButtonClickHandler}/>
                </div>
                <FlightsForm />
            </div>
        );
    }
}

const mapDispatchToProps = {
    logOut
}

export default connect(null, mapDispatchToProps)(FlightsPage);
