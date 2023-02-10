import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddFlowDialog from './Components/AddFlow/AddFlowDialog';
import LetterLibraryActions from "./Components/LetterLibraryActions";
import Value from './Components/Value';
import { setAddFlowDialog } from './Store/letterlibrarySlice';

const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
        hide: true,
        hidable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Value,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: Value,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: Value,
    },
    {
        field: 'rounds',
        headerName: 'Rounds',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: Value,
    },
    {
        field: 'addedBy',
        headerName: 'Added By',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: Value,
    },
]
const lettersFlows = [
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }
]

function LetterLibrary() {

    const tabs = [
        { label: "Letter Flow", value: "letter-library" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]


    const dispatch = useDispatch()

    const [selectedLetterFlows, setSelectedLetterFlows] = useState([])

    return (
        <>
            <TopTabs
                left={143}
                tabs={tabs}
            />
            <TitleHeader
                title="Letter Flow"
                actionButtons={
                    <LetterLibraryActions
                        selectedDocuments={selectedLetterFlows}
                    />
                }
            />
            <Table
                title="Letter Flow"
                onSelectionModelChange={(selected: any) =>
                    setSelectedLetterFlows(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddFlowDialog(true))
                }
                columns={columns}
                rows={lettersFlows}
            />
            <AddFlowDialog />
        </>
    )
}

export default LetterLibrary