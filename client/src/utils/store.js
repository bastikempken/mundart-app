import { createStore, applyMiddleware, compose } from "redux";
import * as sagas from "../sagas";
import rootReducer from "../reducers/index";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(logger);
middlewares.push(sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

Object.keys(sagas).forEach(saga => sagaMiddleware.run(sagas[saga]));

export default store;
