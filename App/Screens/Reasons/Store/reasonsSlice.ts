import { createSlice } from '@reduxjs/toolkit';



const reasonsSlice = createSlice({
    name: 'reasons',
    initialState: {
        addReasonDialog: false,
        selectedReasonsId: 0,
    },
    reducers: {
        setAddReasonDialog: (state, action) => {
            state.addReasonDialog = action.payload
        },
        setSelectedReasonsId: (state, action) => {

            console.log("action.payload===>", action.payload)

            state.selectedReasonsId = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddReasonDialog,
    setSelectedReasonsId
} = reasonsSlice.actions;

export default reasonsSlice.reducer;