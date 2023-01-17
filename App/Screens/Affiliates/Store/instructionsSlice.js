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
    setAddInstructionsDialog,
    setSelectedInstructionsId
} = instructionsSlice.actions;

export default instructionsSlice.reducer;