import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import {loginAction} from "./actions/action";

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const token = Cookies.getJSON('token');


if (token) {
    store.dispatch(loginAction(token));
}

export default store;