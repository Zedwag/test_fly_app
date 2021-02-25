import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'));
