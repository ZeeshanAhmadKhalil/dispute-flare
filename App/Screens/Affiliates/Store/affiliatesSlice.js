import { createSlice } from '@reduxjs/toolkit';

const affiliatesSlice = createSlice({
    name: 'affiliates',
    initialState: {
        addAffiliatesDialog: false,
        selectedAffiliatesId: 0,
    },
    reducers: {
        setAddAffiliatesDialog: (state, action) => {
            state.addAffiliatesDialog = action.payload
        },
        setSelectedAffiliatesId: (state, action) => {
            state.selectedinstructionsId = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddAffiliatesDialog,
    setSelectedAffiliatesId
} = affiliatesSlice.actions;

export default affiliatesSlice.reducer;