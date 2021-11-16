import{createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import RootReducers from "./reducers/rootReducers"

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)))
 
export default store;