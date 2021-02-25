import {ADD_LIKE, LOG_IN, LOG_OUT, REMOVE_LIKE, SET_DATE, SET_FLIGHTS} from './types'
import photo1 from '../img/img.png'
import photo2 from '../img/img_1.png'
import photo3 from '../img/img_2.png'
import photo4 from '../img/img_3.png'
import photo5 from '../img/img_4.png'
import photo6 from '../img/img_5.png'

const initialState= {
    loggedIn: window.sessionStorage.getItem('isLoggedIn'),
    date: new Date(),
    flights: [],
    photos: [photo1, photo2, photo3, photo4, photo5, photo6],
    likes: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, loggedIn: true}
        case LOG_OUT:
            return {...state, loggedIn: false}
        case SET_DATE:
            return {...state, date: action.payload}
        case SET_FLIGHTS:
            return {...state, flights: action.payload}
        case ADD_LIKE:
            return {...state, likes: state.likes + 1}
        case REMOVE_LIKE:
            return {...state, likes: state.likes - 1}
        default: return state
    }
}
