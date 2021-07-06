import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/index'

const initialState = {} 
const middlewares = [thunk] 

export const store = createStore(RootReducer, initialState, applyMiddleware(...middlewares)) 