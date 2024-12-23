import {combineReducers, createStore} from "redux";
import {CounterReducer} from "../model/counter-reducer";

const rootReducer = combineReducers({
    CounterReducer: CounterReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store