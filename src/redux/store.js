import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger/src";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./shop/root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(rootSaga);
