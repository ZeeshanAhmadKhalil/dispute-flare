import { createSlice } from '@reduxjs/toolkit';

const templatesSlice = createSlice({
    name: 'templates',
    initialState: {
        addLetterTemplateDialog: false,
    },
    reducers: {
        setAddLetterTemplateDialog: (state, action) => {
            state.addLetterTemplateDialog = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddLetterTemplateDialog
} = templatesSlice.actions;

export default templatesSlice.reducer;