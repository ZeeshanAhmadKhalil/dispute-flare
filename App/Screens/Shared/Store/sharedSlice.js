import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loader: false,
        toolbar: false,
        profileDialog: false,
        selectedClientTab: "client-dashboard",
        selectedClientId: 0,
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
        setSelectedClientId: (state, action) => {
            state.selectedClientId = action.payload
        },

    },
    extraReducers: {
    },
});

export const {
    setLoader,
    setToolbar,
    setProfileDialog,
    setSelectedClientId,
} = sharedSlice.actions;

export default sharedSlice.reducer;