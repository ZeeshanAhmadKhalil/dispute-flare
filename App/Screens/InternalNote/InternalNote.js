import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import AvatarNameCell from '@Components/Table/Components/AvatarNameCell/AvatarNameCell';
import DateCell from '@Components/Table/Components/DateCell/DateCell';
import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AddInternalNoteDialog from './Components/AddInternalNoteDialog';
import InternalNoteActions from './Components/InternalNoteActions';

function InternalNote() {

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 350,
            headerClassName: 'separator-header',
            renderCell: DateCell,
            hidable: true,
            hide: false,
        },
        {
            field: 'note',
            headerName: 'Note',
            width: 500,
            headerClassName: 'separator-header',
            renderCell: LinkCell,
            hidable: true,
            hide: false,
        },
        {
            field: 'addedBy',
            headerName: 'Added By',
            width: 350,
            headerClassName: 'separator-header',
            renderCell: AvatarNameCell,
            hidable: true,
            hide: false,
        },
    ]
    let clients = [
        {
            id: 1,
            date: new Date(2022, 1, 1),
            note: "This is an internal note",
            addedBy: "Tatsumaki",
            pfp: '/Assets/Images/Tatsumaki.png',
        },
        {
            id: 2,
            date: new Date(2022, 1, 2),
            note: "This is an internal note",
            addedBy: "Sonic",
            pfp: '/Assets/Images/sonic.png',
        },
        {
            id: 3,
            date: new Date(2022, 1, 3),
            note: "This is an internal note",
            addedBy: "Saitama",
            pfp: '/Assets/Images/saitama.png',
        },
        {
            id: 4,
            date: new Date(2022, 1, 4),
            note: "This is an internal note",
            addedBy: "Mumen Rider",
            pfp: '/Assets/Images/mumen-rider.png',
        },
        {
            id: 5,
            date: new Date(2022, 1, 5),
            note: "This is an internal note",
            addedBy: "King",
            pfp: '/Assets/Images/king.png',
        },
        {
            id: 6,
            date: new Date(2022, 1, 6),
            note: "This is an internal note",
            addedBy: "Genos",
            pfp: '/Assets/Images/genos.png',
        },
        {
            id: 7,
            date: new Date(2022, 1, 7),
            note: "This is an internal note",
            addedBy: "Garou",
            pfp: '/Assets/Images/garou.png',
        },
        {
            id: 8,
            date: new Date(2022, 1, 8),
            note: "This is an internal note",
            addedBy: "Fubuki",
            pfp: '/Assets/Images/fubuki.png',
        },
        {
            id: 9,
            date: new Date(2022, 1, 9),
            note: "This is an internal note",
            addedBy: "Bomb",
            pfp: '/Assets/Images/bomb.png',
        },
        {
            id: 10,
            date: new Date(2022, 1, 10),
            note: "This is an internal note",
            addedBy: "Bang",
            pfp: '/Assets/Images/bang.png',
        },
    ]
    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]

    const router = useRouter()

    const [selectedNotes, setSelectedNotes] = useState([])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Internal Notes"
                actionButtons={
                    <InternalNoteActions
                        selectedNotes={selectedNotes}
                    />
                }
            />
            <ScrollContainer>
                <Table
                    title="Internal Notes"
                    onSelectionModelChange={(selected) =>
                        setSelectedNotes(selected)
                    }
                    onRowClick={() =>
                        router.push('report')
                    }
                    columns={columns}
                    rows={clients}
                />
            </ScrollContainer>
            <AddInternalNoteDialog />
        </>
    )
}

export default InternalNote