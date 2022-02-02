import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import thunk from "redux-thunk"
import reducers from "./reducers"

const middleware = [
    promiseMiddleware,
    thunk
]

export const Store = createStore(reducers, undefined, applyMiddleware(...middleware))