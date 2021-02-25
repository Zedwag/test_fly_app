import React, {Component} from 'react';
import Flight from '../Flight'
import { connect } from 'react-redux'
import './FlightsList.css'

class FlightsList extends Component {

    render() {

        const flightsList = this.props.flights.map((item) => {
            const { id } = item

            return (
                <Flight flight={item} key={id} />
            )
        })

        return (
           <div className="flights-list">
               {flightsList}
               {flightsList}
               {flightsList}
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        flights: state.flights
    }
}

export default connect(mapStateToProps)(FlightsList);
