import { createSlice } from '@reduxjs/toolkit';
import Gear from 'public/Assets/Svgs/gear.svg';
import AssignedTo from '../Components/AssignedTo';
import ClientName from '../Components/ClientName';

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
                renderCell: ClientName,
                hide: false,
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
                field: 'assignedToPfp',
                headerName: 'Assigned To Pfp',
                width: 200,
                hide: true,
            },
            {
                field: 'assignedTo',
                headerName: 'Assigned To',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                renderCell: AssignedTo,
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
                editable: true,
                type: 'singleSelect',
                valueOptions: ['Lead', 'Active', 'Inactive', 'Cancelled']
            },
        ],
        clients: [
            {
                id: 1,
                clientName: 'Zeeshan Ahmad',
                email: 'zak@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/d-ace.jpg',
                assignedTo: 'd ace',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Lead',
            },
            {
                id: 2,
                clientName: 'Rafay',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/d-water-law.jpg',
                assignedTo: 'd water law',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Active',
            },
            {
                id: 3,
                clientName: 'Ali',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/d-luffy.jpg',
                assignedTo: 'd luffy',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Inactive',
            },
            {
                id: 4,
                clientName: 'Usman',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/kaido.jpg',
                assignedTo: 'kaido',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Cancelled',
            },
            {
                id: 5,
                clientName: 'Mudasir',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/nami.jpg',
                assignedTo: 'nami',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Inactive',
            },
            {
                id: 6,
                clientName: 'Qammar Jamshaid',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/nico-robin.jpg',
                assignedTo: 'nico robin',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Active',
            },
            {
                id: 7,
                clientName: 'Usama',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/roronoa-zoro.jpg',
                assignedTo: 'roronoa zoro',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Active',
            },
            {
                id: 8,
                clientName: 'Haris',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/shanks.jpg',
                assignedTo: 'shanks',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Cancelled',
            },
            {
                id: 9,
                clientName: 'Showkat',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/tony-tony-chopper.jpg',
                assignedTo: 'tony tony chopper',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Cancelled',
            },
            {
                id: 10,
                clientName: 'Awais',
                email: 'John@gmail.com',
                mobile: '(000) 000 - 0000',
                assignedToPfp: '/Assets/Images/vinsmoke-sanji.jpg',
                assignedTo: 'vinsmoke sanji',
                followUp: '12/02/2022',
                lastLogin: 'June 22, 12:20 PM',
                status: 'Cancelled',
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