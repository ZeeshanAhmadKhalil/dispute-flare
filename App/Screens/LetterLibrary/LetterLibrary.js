import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddFlowDialog from './Components/AddFlow/AddFlowDialog';
import LetterLibraryActions from "./Components/LetterLibraryActions";
import Value from './Components/Value';

function LetterLibrary() {

    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]
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

    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedDocuments, setSelectedDocuments] = useState([])

    return (
        <>
            <TopTabs
                left={143}
                tabs={tabs}
            />
            <TitleHeader
                title="Letter Library"
                actionButtons={
                    <LetterLibraryActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />
            <Table
                autoHeight={true}
                title="LetterLibrary"
                onSelectionModelChange={(selected) =>
                    setSelectedDocuments(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={letters}
            />

            <AddFlowDialog />
        </>
    )
}

export default LetterLibrary