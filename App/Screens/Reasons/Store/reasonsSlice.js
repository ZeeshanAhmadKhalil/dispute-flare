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
    setAddReasonDialog,
    setSelectedReasonsId
} = reasonsSlice.actions;

export default reasonsSlice.reducer;