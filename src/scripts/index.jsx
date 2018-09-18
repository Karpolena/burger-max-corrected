import React from "react";
import {render} from "react-dom";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";

import App from "./App";
import "../scss/main.scss";
import reducer from "./store/reducer";

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

render(app, document.getElementById("root"));