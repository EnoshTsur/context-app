import { createStore, combineReducers } from 'redux'
import userReducer, { reducer } from './userReducer'
import { composeWithDevTools, } from 'redux-devtools-extension'

const reducers = combineReducers({ userReducer, })
export const store = createStore(reducers, composeWithDevTools())