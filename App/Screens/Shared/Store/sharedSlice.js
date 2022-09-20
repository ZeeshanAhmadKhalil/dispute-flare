import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loader: false,
        toolbar: false,
    },
    reducers: {
        setToolbar: (state, action) => {
            state.toolbar = action.payload
        },
        setLoader: (state, action) => {
            state.loader = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setLoader,
    setToolbar,
} = sharedSlice.actions;

export default sharedSlice.reducer;