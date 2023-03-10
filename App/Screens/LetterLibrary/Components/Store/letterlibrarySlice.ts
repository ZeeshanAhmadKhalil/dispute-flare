import { createSlice } from '@reduxjs/toolkit';



const letterlibrarySlice = createSlice({
    name: 'letterLibrary',
    initialState: {
        addFlowDialog: false,
        importFlowDialog: false,

        defaultColumns: [
            "id",
            "title",
            "type",
            "reason",
            "rounds",
            "addedBy"

        ],
    },
    reducers: {
        setAddFlowDialog: (state: any, action) => {
            state.addFlowDialog = action.payload
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
    setAddFlowDialog,
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
} = letterlibrarySlice.actions;

export default letterlibrarySlice.reducer;