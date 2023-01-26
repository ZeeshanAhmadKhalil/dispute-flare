import { randomIntFromInterval } from '@Config/helper';
import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        hoverSidebar: false,
        sidebar: false,
        themesDialog: false,
    },
    reducers: {
        setThemesDialog: (state, action) => {
            state.themesDialog = action.payload
        },
        setHoverSideBar: (state, action) => {
            state.hoverSidebar = action.payload
        },
        setSideBar: (state, action) => {
            state.sidebar = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setThemesDialog,
    setSideBar,
    setHoverSideBar,
} = layoutSlice.actions;

export default layoutSlice.reducer;