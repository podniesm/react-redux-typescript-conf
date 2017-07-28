import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider>
        <App name="Willson" />
    </Provider>,
    document.getElementById("root")
);