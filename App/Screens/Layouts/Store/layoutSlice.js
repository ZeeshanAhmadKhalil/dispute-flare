import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        sidebar: false,
    },
    reducers: {
        setSideBar: (state, action) => {
            state.sidebar = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setSideBar,
} = layoutSlice.actions;

export default layoutSlice.reducer;