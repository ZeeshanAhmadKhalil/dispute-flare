import { createSlice } from '@reduxjs/toolkit';



const affiliateDashboardSlice = createSlice({
    name: 'affiliateDashboard',
    initialState: {
        recordPaymentDialog: false,
        selectedPaymentId: 0,
    },
    reducers: {
        setRecordPaymentDialog: (state, action) => {
            state.recordPaymentDialog = action.payload
        },
        setSelectedAffiliatesId: (state, action) => {

            console.log("action.payload===>", action.payload)

            state.selectedPaymentId = action.payload
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
    setRecordPaymentDialog,
    setSelectedAffiliatesId
} = affiliateDashboardSlice.actions;

export default affiliateDashboardSlice.reducer;