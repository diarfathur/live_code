import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { store } from './Store'
import AppRoute from './AppRoute';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'unistore/react';

const rootEl = document.getElementById("root");
const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        rootEl
    );

render(AppRoute);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
