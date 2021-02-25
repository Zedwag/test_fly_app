import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './reducer'
import {sagaWatcher} from './sagas'

const saga = createSagaMiddleware()

const store = createStore(reducer, compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

export default store
