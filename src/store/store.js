import {combineReducers, configureStore} from "@reduxjs/toolkit";
import headerMenuReducer from "../features/headerMenu/headerMenuSlice.js"

const rootReducer = combineReducers({
    headerMenu: headerMenuReducer
})

export const store = configureStore({
    reducer: rootReducer
})