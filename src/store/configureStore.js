import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import game from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(game, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
