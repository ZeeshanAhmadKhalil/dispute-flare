import { createSlice } from '@reduxjs/toolkit';

const internalNoteSlice = createSlice({
    name: 'internalNote',
    initialState: {
        addInternalNoteDialog: false,
    },
    reducers: {
        setAddInternalNoteDialog: (state, action) => {
            state.addInternalNoteDialog = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setAddInternalNoteDialog,
} = internalNoteSlice.actions;

export default internalNoteSlice.reducer;