import DefaultCell from '@Components/DefaultCell/DefaultCell';
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddReasonDialog from './Components/AddReason/AddReasonDialog';
import ReasonsAction from './Components/ReasonActions';
import Title from './Components/Title';
import { setAddReasonDialog } from './Store/reasonsSlice';

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
        renderCell: Title,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: SwitchCell,
    },
    {
        field: 'addedBy',
        headerName: 'Added By',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: ({ value }) => <DefaultCell value={value} />,
    },


]
const reasons = [
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },
]

function Reasons() {

    const tabs = [
        { label: "Letter Flow", value: "letter-library" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]

    const dispatch = useDispatch()

    const [selectedReasons, setSelectedReasons] = useState([])

    return (
        <>
            <TopTabs
                left={143}
                tabs={tabs}
            />
            <TitleHeader
                title="Reasons"
                actionButtons={
                    <ReasonsAction
                        selectedReasons={selectedReasons}
                    />
                }
            />
            <Table
                title="reasons"
                onSelectionModelChange={(selected) =>
                    setSelectedReasons(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddReasonDialog(true))
                }
                columns={columns}
                rows={reasons}
            />
            <AddReasonDialog />
        </>
    )
}

export default Reasons