import { createSlice } from '@reduxjs/toolkit';

const commissionSlice = createSlice({
    name: 'commission',
    initialState: {
        standardRateDialog: false,
    },
    reducers: {
        setStandardRateDialog: (state, action) => {
            state.standardRateDialog = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setStandardRateDialog,
} = commissionSlice.actions;

export default commissionSlice.reducer;