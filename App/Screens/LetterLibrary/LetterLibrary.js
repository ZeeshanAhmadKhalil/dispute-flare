import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddFlowDialog from './Components/AddFlow/AddFlowDialog';
import LetterLibraryActions from "./Components/LetterLibraryActions";
import Value from './Components/Value';
import {
    setAllColumnsVisibility,
    setColumnVisibility
} from './Store/letterlibrarySlice';

function LetterLibrary() {

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
    const letters = [
        {
            id: 1,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        },
        {
            id: 7,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        },
        {
            id: 2,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        },
        {
            id: 3,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        },
        {
            id: 4,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        },
        {
            id: 5,
            title: "credit card",
            type: "type A",
            reason: "IDK",
            rounds: "6",
            addedBy: "James Bond"
        }
    ]

    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]

    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedDocuments, setSelectedDocuments] = useState([])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Letter Library"
                actionButtons={
                    <LetterLibraryActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />

            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />


            <Table
                autoHeight={true}
                title="Documents"
                onSelectionModelChange={(selected) =>
                    setSelectedDocuments(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={letters}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />

            <AddFlowDialog />
        </>
    )
}

export default LetterLibrary