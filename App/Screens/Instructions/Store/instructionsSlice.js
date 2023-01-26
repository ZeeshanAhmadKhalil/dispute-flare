import { createSlice } from '@reduxjs/toolkit';



const instructionsSlice = createSlice({
    name: 'instructions',
    initialState: {
        addInstructionsDialog: false,
        selectedinstructionsId: 0,
    },
    reducers: {
        setAddInstructionsDialog: (state, action) => {
            state.addInstructionsDialog = action.payload
        },
        setSelectedInstructionsId: (state, action) => {
            state.selectedinstructionsId = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddInstructionsDialog,
    setSelectedInstructionsId
} = instructionsSlice.actions;

export default instructionsSlice.reducer;