import DefaultCell from '@Components/DefaultCell/DefaultCell';
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddReasonDialog from './Components/AddReason/AddReasonDialog';
import ReasonsAction from './Components/ReasonActions';
import Title from './Components/Title';

function Reasons() {

    const tabs = [
        { label: "Letter Flow", value: "letter-library" },
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
            id: 1,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
        {
            id: 2,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
        {
            id: 3,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
        {
            id: 4,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
        {
            id: 5,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
        {
            id: 6,
            title: "credit card",
            status: "active",
            addedBy: "James Bond"
        },
    ]

    const {
        selectedClientId
    } = useSelector(state => state.shared)

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
                autoHeight={true}
                title="reasons"
                onSelectionModelChange={(selected) =>
                    setSelectedReasons(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={reasons}
            />


            <AddReasonDialog />
        </>
    )
}

export default Reasons