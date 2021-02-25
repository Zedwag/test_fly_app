import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchFlights, setDate} from '../../redux/actions'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'
import './FlightsForm.css'
import FlightsList from '../FlightsList'

class FlightsForm extends Component {

    constructor(props) {
        super(props);
        this.props.fetchFlights()
        this.sliderRef = React.createRef();
    }


    onDateChange = (date) => {
        this.props.setDate(date)
        this.props.fetchFlights()
    }

    mouseDown = false
    prevMousePosition = 0

    sliderMoveHandler = (event) => {
        if (this.mouseDown) {
            this.sliderRef.current.scrollLeft = 2 * (this.prevMousePosition - event.screenX)
        }
    }

    render() {

        let pickedDate = this.props.date.toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'})
        pickedDate = pickedDate.split(' ')
        pickedDate.pop()
        pickedDate = pickedDate.join(' ')

        return (
            <div className="flights">
                <div className="flights__container">
                    <div className="flights__header">
                        <div className="flights__header_cities">
                            Вылеты
                            <div className="triangle"></div>
                            SVO - JFK
                        </div>
                        <div className="flights__header_date">
                            {pickedDate}
                            <SingleDatePicker
                                startDate={this.props.date}
                                minDate={new Date(1900, 0, 1)}
                                maxDate={new Date(2100, 0, 1)}
                                dateFormat="D"
                                monthFormat="MMM YYYY"
                                startWeekDay="monday"
                                disabled={false}
                                className="date-picker"
                                onChange={(startDate) => this.onDateChange(startDate)}
                            />
                        </div>
                    </div>
                    <div className="flights__slider-wrapper">
                        <div
                            className="flights__slider"
                            onMouseMove={this.sliderMoveHandler}
                            onMouseDown={event => {
                                this.mouseDown = true
                                this.prevMousePosition = event.screenX
                            }}
                            onMouseUp={() => {
                                this.mouseDown = false
                                this.prevMousePosition = 0
                            }}
                            ref={this.sliderRef}
                        >
                            <img className="flights__slider_photo" src={this.props.photos[0]} alt="photo1"/>
                            <img className="flights__slider_photo" src={this.props.photos[1]} alt="photo2"/>
                            <img className="flights__slider_photo" src={this.props.photos[2]} alt="photo3"/>
                            <img className="flights__slider_photo" src={this.props.photos[3]} alt="photo4"/>
                            <img className="flights__slider_photo" src={this.props.photos[4]} alt="photo4"/>
                            <img className="flights__slider_photo" src={this.props.photos[5]} alt="photo4"/>
                        </div>
                    </div>
                    <p className="flights__favorite">
                        Добавлено в избранное: <span className="flights__favorite_number">{this.props.likes}</span> рейсов
                    </p>
                    <FlightsList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        date: state.date,
        flights: state.flights,
        photos: state.photos,
        likes: state.likes
    }
}

const mapDispatchToProps = {
    setDate,
    fetchFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightsForm);
