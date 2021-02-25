import {call, put, takeEvery, select} from 'redux-saga/effects'
import { REQUEST_FLIGHTS, SET_FLIGHTS} from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_FLIGHTS, sagaWorker)
}

function* sagaWorker() {
    const state = yield select()
    const payload = yield call(fetchFlights, state.date)
    yield put({ type: SET_FLIGHTS, payload })
}

async function fetchFlights(date) {
    const addZero = (num) => {
        return num > 9 ? '' + num : '0' + num
    }
    const dateFormatted = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
    const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${dateFormatted}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b81b53970amshb83d4783e380538p1e6d44jsnaf7b78904250",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })
    return createFlightsArray(await response.json())
}

function createFlightsArray(data) {
    const flightsArray = data.Routes.map((route, id) => {
        return {
            ...route,
            Carrier: data.Carriers[id].Name
        }
    })
    return flightsArray
}
