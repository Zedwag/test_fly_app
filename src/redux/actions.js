import {LOG_IN, LOG_OUT, SET_DATE, REQUEST_FLIGHTS, SET_FLIGHTS, ADD_LIKE, REMOVE_LIKE} from './types'

export function logIn() {
    return {
        type: LOG_IN
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function setDate(date) {
    return {
        type: SET_DATE,
        payload: date
    }
}

export function fetchFlights() {
    return {
        type: REQUEST_FLIGHTS
    }
}

export function setFLights(flights) {
    return {
        type: SET_FLIGHTS,
        payload: flights
    }
}

export function addLike() {
    return {
        type: ADD_LIKE
    }
}

export function removeLike() {
    return {
        type: REMOVE_LIKE
    }
}
