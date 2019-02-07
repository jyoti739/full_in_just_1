import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Main from './navigation/main'
import * as serviceWorker from './serviceWorker';
import LoginReducer from './actions/loginReducer'
import {Provider} from 'react-redux'
import Login from './routerComponents/Login'
import {createStore} from 'redux'

const store = createStore(LoginReducer)

ReactDOM.render(<Provider store = {store}><BrowserRouter><Main /></ BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
