import { createSlice } from '@reduxjs/toolkit';



const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        addTeamDialog: false,
        importTeamDialog: false,

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

        // setImportClientsDialog: (state, action) => {
        //     state.importClientsDialog = action.payload
        // },
        setAddTeamDialog: (state, action) => {
            state.addTeamDialog = action.payload
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
    setAddTeamDialog,
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
} = teamsSlice.actions;

export default teamsSlice.reducer;