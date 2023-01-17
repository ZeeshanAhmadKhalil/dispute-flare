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

            console.log("action.payload===>", action.payload)

            state.selectedinstructionsId = action.payload
        },
        setColumnVisibility: (state, action) => {

            const { field, hide } = action.payload || {}

            let columns = [...state.columns]
            let index = columns.findIndex(obj => obj.field == field)
            columns[index] = {
                ...columns[index],
                hide: !hide,
            }

            state.columns = columns
        },
        setAllColumnsVisibility: (state, action) => {

            const { hide } = action.payload || {}

            state.columns
                = state
                    .columns
                    .map(obj => ({
                        ...obj,
                        hide:
                            obj.hidable ?
                                hide
                                :
                                obj.hide,
                    }))

        },
        setDefaultColumnsVisibility: (state, action) => {
            state.columns
                = state
                    .columns
                    .map(obj => ({
                        ...obj,
                        hide:
                            state.defaultColumns.includes(obj.field) ?
                                false
                                :
                                true,
                    }))
        }
    },
    extraReducers: {
    },
});

export const {
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
    setAddAffiliatesDialog,
    setSelectedAffiliatesId
} = affiliatesSlice.actions;

export default affiliatesSlice.reducer;