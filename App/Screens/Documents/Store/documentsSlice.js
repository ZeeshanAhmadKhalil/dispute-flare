import { createSlice } from '@reduxjs/toolkit';
import Status from '@Screens/Client/Components/Status';
import Title from '../Components/Title';
import DateAdded from '../Components/DateAdded';

const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        addClientDialog: false,
        importClientsDialog: false,
        columns: [

            {
                field: 'id',
                headerName: 'Id',
                width: 50,
                hide: true,
                hidable: true,
            },
            {
                field: 'dateAdded',
                headerName: 'Date Added',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: DateAdded,
            },
            {
                field: 'title',
                headerName: 'Title',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: Title,
            },
            {
                field: 'expirationDate',
                headerName: 'Expiration Date',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: DateAdded,
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 200,
                hidable: true,
                editable: true,
                type: 'singleSelect',
                valueOptions: ['Repaired', 'Verified', 'Negative', 'Delete'],
                renderCell: Status,
            },


        ],
        documents: [
            {
                id: 1,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },

        ],
        defaultColumns: [
            "id",
            "dateAdded",
            "title",
            "expirationDate",
            "status",

        ],
    },
    reducers: {
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
} = documentsSlice.actions;

export default documentsSlice.reducer;