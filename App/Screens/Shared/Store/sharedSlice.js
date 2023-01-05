import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loader: false,
        toolbar: false,
        profileDialog: false,
        selectedClientTab: "client-dashboard",
    },
    reducers: {
        setProfileDialog: (state, action) => {
            state.profileDialog = action.payload
        },
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
    setProfileDialog,
} = sharedSlice.actions;

export default sharedSlice.reducer;