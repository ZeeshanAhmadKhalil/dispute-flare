import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        sidebar: false,
        hoverSidebar: false,
    },
    reducers: {
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
    setSideBar,
    setHoverSideBar,
} = layoutSlice.actions;

export default layoutSlice.reducer;