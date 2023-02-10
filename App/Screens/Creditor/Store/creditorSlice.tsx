import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import { createSlice } from '@reduxjs/toolkit';
import Gear from 'public/Assets/Svgs/gear.svg';

const creditorSlice = createSlice({
    name: 'creditor',
    initialState: {
        creditorDialog: false,
        importCreditorsDialog: false,
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
                field: 'creditor',
                headerName: 'Creditor',
                width: 200,
                headerClassName: 'separator-header',
                renderCell: (props: any) => (
                    <LinkCell
                        {...props}
                        navigateTo="creditor-dashboard"
                    />
                ),
                hidable: true,
                hide: false,
            },
            {
                field: 'phone',
                headerName: 'Phone',
                width: 200,
                hide: false,
                hidable: true,
            },
            {
                field: 'address',
                headerName: 'Address',
                width: 200,
                hide: false,
                hidable: true,
            },
            {
                field: 'city',
                headerName: 'City',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'state',
                headerName: 'State',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 200,
                hidable: true,
                editable: true,
                type: 'singleSelect',
                valueOptions: ['Active', 'Inactive'],
                renderCell: DropDownCell,
            },
        ],
        creditors: [
            {
                id: 1,
                creditor: "Heihachi Mishima",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 2,
                creditor: "Kazuya Mishima",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 3,
                creditor: "Jin Kazama",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 4,
                creditor: "Ogre",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 5,
                creditor: "Lars",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 6,
                creditor: "Bryan Fury",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 7,
                creditor: "Feng Wei",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 8,
                creditor: "Paul Phoenix",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 9,
                creditor: "Hwoarang",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
            {
                id: 10,
                creditor: "Bob",
                phone: "0300-5290620",
                address: "Moh. Shahfasil",
                city: "Attock",
                state: "Punjab",
                status: "Active",
            },
        ],
        defaultColumns: [
            "settings",
            "creditor",
            "phone",
            "address",
            "city",
            "state",
            "status",
        ],
    },
    reducers: {
        setCreditorDialog: (state: any, action) => {
            state.creditorDialog = action.payload
        },
        setImportCreditorsDialog: (state: any, action) => {
            state.importCreditorsDialog = action.payload
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
    setCreditorDialog,
    setImportCreditorsDialog,
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
} = creditorSlice.actions;

export default creditorSlice.reducer;