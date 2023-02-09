import { createSlice } from '@reduxjs/toolkit';

const affiliateDashboardSlice = createSlice({
    name: 'affiliateDashboard',
    initialState: {
        recordPaymentDialog: false,
        selectedPaymentId: 0,
    },
    reducers: {
        setRecordPaymentDialog: (state: any, action) => {
            state.recordPaymentDialog = action.payload
        },
        setSelectedAffiliatesId: (state: any, action) => {

            state.selectedPaymentId = action.payload
        },
        setColumnVisibility: (state: any, action) => {

            const { field, hide } = action.payload || {}

            let columns = [...state.columns]
            let index = columns.findIndex(obj => obj.field == field)
            columns[index] = {
                ...columns[index],
                hide: !hide,
            }

            state.columns = columns
        },
        setAllColumnsVisibility: (state: any, action) => {

            const { hide } = action.payload || {}

            state.columns
                = state
                    .columns
                    .map((obj: any) => ({
                        ...obj,
                        hide:
                            obj.hidable ?
                                hide
                                :
                                obj.hide,
                    }))

        },
        setDefaultColumnsVisibility: (state: any, action) => {
            state.columns
                = state
                    .columns
                    .map((obj: any) => ({
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