import {createSlice} from "@reduxjs/toolkit";
import menuItems from "./headerMenu.json";
export const headerMenuSlice = createSlice({
    name: "headerMenu",
    initialState: {
        items: menuItems
    },
    reducers: {}
})

export const selectMenu = (state) => state.headerMenu.items
export default headerMenuSlice.reducer