import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Flight.css'
import flyImage from '../../img/plane 4.png'
import likedSvg from '../../img/like.png'
import unlikedSvg from '../../img/unlike.png'
import {addLike, removeLike} from '../../redux/actions'

class Flight extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        }
    }

    likeClickHandler = () => {
        if (this.state.liked) {
            this.setState({liked: false})
            this.props.removeLike()
        } else {
            this.setState({liked: true})
            this.props.addLike()
        }
    }

    render() {

        if (this.props.flight) {
            return (
                <div className="flight">
                    <div className="flyicon-container">
                        <img className="flyicon" src={flyImage} alt="flyicon"/>
                    </div>
                    <div className="flight__content">
                        <div className="flight__content_details">
                            <h3 className="flight__content_cities">Moscow (SVO) &#8594; New York City (JFK)</h3>
                            <p className="flight__content_date">{this.props.date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})} {this.props.flight.QuoteDateTime.split('T')[1]}</p>
                            <p className="flight__content_company">{this.props.flight.Carrier}</p>
                        </div>
                        <div className="flight__content_addition">
                            <img onClick={this.likeClickHandler} className="flight__content_icon" src={this.state.liked ? likedSvg : unlikedSvg} alt=""/>
                            <p className="flight__content_price">
                                Price: <span className="flight__content_sum">{this.props.flight.Price} ₽</span>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="flight">
                ...
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        date: state.date
    }
}

const mapDispatchToProps = {
    addLike,
    removeLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
