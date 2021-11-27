import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";
import { AppState } from "./types";

const initState: AppState = {
    cities: [],
    searchKeyword: '',
    weather: []
}

const makeStore = (initialState = initState) => {
    const sagaMiddleware = createSagaMiddleware()
    let composeEnhancers = compose

    if (process.env.NODE_ENV === 'development') {
        if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        }
    }

    const weather = localStorage.getItem('weather')
    const persistedState: AppState = {
    ...initialState,
    weather: weather === null ? []: JSON.parse(weather)
  }

    const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(sagaMiddleware)))  
    sagaMiddleware.run(rootSaga)
    return store
}

export default makeStore
