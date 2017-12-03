import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Details from "./books/details/Details";
import {routerReducer, syncHistoryWithStore} from 'react-router-redux'

const store = createStore(combineReducers({
    ...reducers,
    routing:routerReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const history = syncHistoryWithStore(createBrowserHistory, store);



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
