import AvatarNameCell from '@Components/Table/Components/AvatarNameCell/AvatarNameCell';
import DateCell from '@Components/Table/Components/DateCell/DateCell';
import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import SecretCell from '@Components/Table/Components/SecretCell/SecretCell';
import { createSlice } from '@reduxjs/toolkit';
import Gear from 'public/Assets/Svgs/gear.svg';

const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        addCreditMonitoringInfoDialog: false,
        addDisputeDialog: false,
        followUpDialog: false,
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
                field: 'type',
                headerName: 'Type',
                width: 150,
                hide: true,
                hidable: true,
            },
            {
                field: 'instruction',
                headerName: 'Instruction',
                width: 200,
                hide: true,
                hidable: true,
            },
            {
                field: 'dateCreated',
                headerName: 'Date Created',
                width: 180,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: DateCell,
            },
            {
                field: 'creditor',
                headerName: 'Creditor',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: AvatarNameCell,
            },
            {
                field: 'account',
                headerName: 'Account',
                width: 120,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
                renderCell: SecretCell,
            },
            {
                field: 'bureaus',
                headerName: 'Bureaus',
                width: 150,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
            },
            {
                field: 'dispute',
                headerName: 'Dispute',
                width: 150,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
            },
            {
                field: 'reason',
                headerName: 'Reason',
                width: 180,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
            },
            {
                field: 'template',
                headerName: 'Template',
                width: 150,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
            },
            {
                field: 'status',
                headerName: 'Status',
                width: 150,
                hidable: true,
                editable: true,
                type: 'singleSelect',
                valueOptions: ['Repaired', 'Verified', 'Negative', 'Delete'],
                renderCell: ({ value }) => <DropDownCell value={value} />,
            },
            {
                field: 'round',
                headerName: 'Round',
                width: 200,
                headerClassName: 'separator-header',
                hidable: true,
                hide: false,
            },

        ],
        disputes: [
            {
                id: 1,
                type: "Collection",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 1),
                creditor: "Razor",
                pfp: '/Assets/Images/razor.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 1",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 1",
            },
            {
                id: 2,
                type: "Collection",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 2),
                creditor: "Lisa",
                pfp: '/Assets/Images/lisa.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 2",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 2",
            },
            {
                id: 3,
                type: "Collection",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 3),
                creditor: "Klee",
                pfp: '/Assets/Images/klee.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 3",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 3",
            },
            {
                id: 4,
                type: "Late payment",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 4),
                creditor: "Kaeya",
                pfp: '/Assets/Images/kaeya.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 4",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 4",
            },
            {
                id: 5,
                type: "Late payment",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 5),
                creditor: "Jean",
                pfp: '/Assets/Images/jean.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 5",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 5",
            },
            {
                id: 6,
                type: "Late payment",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 6),
                creditor: "Barbara",
                pfp: '/Assets/Images/barbara.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 6",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 6",
            },
            {
                id: 7,
                type: "Inquirues",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 7),
                creditor: "Amber",
                pfp: '/Assets/Images/amber.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 7",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 7",
            },
            {
                id: 8,
                type: "Inquirues",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 8),
                creditor: "Aloy",
                pfp: '/Assets/Images/aloy.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 8",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 8",
            },
            {
                id: 9,
                type: "Inquirues",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 9),
                creditor: "Jean",
                pfp: '/Assets/Images/jean.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 9",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 9",
            },
            {
                id: 10,
                type: "Charge Offs",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 9),
                creditor: "Rosaria",
                pfp: '/Assets/Images/rosaria.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 9",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 9",
            },
            {
                id: 11,
                type: "Charge Offs",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 10),
                creditor: "Mona",
                pfp: '/Assets/Images/mona.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 10",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 10",
            },
            {
                id: 12,
                type: "Charge Offs",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 11),
                creditor: "Eula",
                pfp: '/Assets/Images/eula.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 11",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 11",
            },
            {
                id: 13,
                type: "others",
                instruction: "To repair the credit score",
                dateCreated: new Date(2022, 1, 12),
                creditor: "Bennett",
                pfp: '/Assets/Images/bennett.png',
                account: "5456748746789753",
                bureaus: "Experian",
                dispute: "dispute 12",
                reason: "United Account",
                template: "United Account",
                status: "Repaired",
                round: "Round 12",
            },
        ],
        defaultColumns: [
            "settings",
            "dateCreated",
            "creditor",
            "account",
            "bureaus",
            "dispute",
            "reason",
            "template",
            "status",
            "round",
        ],
        providers: [
            { label: "Razor", value: 1 },
            { label: "Lisa", value: 2 },
            { label: "Klee", value: 3 },
            { label: "Kaeya", value: 4 },
            { label: "Jean", value: 5 },
            { label: "Barbara", value: 6 },
            { label: "Amber", value: 7 },
            { label: "Aloy", value: 8 },
            { label: "Jean", value: 9 },
            { label: "Rosaria", value: 10 },
            { label: "Mona", value: 11 },
            { label: "Eula", value: 12 },
            { label: "Bennett", value: 13 },
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
        },
        setAddCreditMonitoringInfoDialog: (state, action) => {
            state.addCreditMonitoringInfoDialog = action.payload
        },
        setDisputeDialog: (state, action) => {
            state.addDisputeDialog = action.payload
        },
        setFollowUpDialog: (state, action) => {
            state.followUpDialog = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setDisputeDialog,
    setFollowUpDialog,
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
    setAddCreditMonitoringInfoDialog,
} = clientsSlice.actions;

export default clientsSlice.reducer;