import { createSlice } from '@reduxjs/toolkit';
import Gear from 'public/Assets/Svgs/gear.svg';

const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        columns: [
            {
                field: 'settings',
                headerName: (
                    <Gear
                        color={"#ACADAF"}
                        height={15}
                        width={15}
                    />
                ),
                width: 50,
                headerClassName: 'settings-header',
                sortable: false,
            },
            {
                field: 'id',
                headerName: 'Id',
                width: 50,
                hide: true,
                hidable: true,
            },
            {
                field: 'clientName',
                headerName: 'Client Name',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'email',
                headerName: 'Email',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'mobile',
                headerName: 'Mobile',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'assignedTo',
                headerName: 'Assigned To',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'followUp',
                headerName: 'Follow Up',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'lastLogin',
                headerName: 'Last Login',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 200,
                hidable: true,
            },
        ],
        defaultColumns: [
            "settings",
            "clientName",
            "email",
            "mobile",
            "assignedTo",
            "followUp",
            "lastLogin",
            "status",
        ]
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

            console.log("hide===>", hide)

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
} = clientsSlice.actions;

export default clientsSlice.reducer;