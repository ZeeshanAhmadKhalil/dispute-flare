import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import { createSlice } from '@reduxjs/toolkit';
import DateAdded from '../Components/DateAdded';
import Title from '../Components/Title';

const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        addClientDialog: false,
        importClientsDialog: false,
        columns: [
            {
                field: 'id',
                headerName: 'Id',
                width: 150,
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
                renderCell: DropDownCell,
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
            {
                id: 1,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 2,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 3,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 4,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 5,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 6,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 7,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 8,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 9,
                dateAdded: new Date(2022, 1, 1),
                title: "Razor",
                expirationDate: new Date(2022, 1, 1),
                status: "Repaired",

            },
            {
                id: 10,
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
} = documentsSlice.actions;

export default documentsSlice.reducer;