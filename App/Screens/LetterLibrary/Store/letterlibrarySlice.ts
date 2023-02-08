import { createSlice } from '@reduxjs/toolkit';



const letterlibrarySlice = createSlice({
    name: 'letter-library',
    initialState: {
        addFlowDialog: false,
    },
    reducers: {
        setAddFlowDialog: (state, action) => {
            state.addFlowDialog = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddFlowDialog,
} = letterlibrarySlice.actions;

export default letterlibrarySlice.reducer;