import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import gnomesApp from "./reducers";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.css";

let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
	middleware = [...middleware, logger];
}

const store = createStore(gnomesApp, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
document.getElementById("root"));
registerServiceWorker();