import DefaultCell from '@Components/DefaultCell/DefaultCell'
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell'
import Table from '@Components/Table/Table'
import TitleHeader from '@Components/TitleHeader/TitleHeader'
import TopTabs from '@Components/TopTabs/TopTabs'
import { useState } from 'react'
import AddInstructionDialog from './Components/AddAffiliate/AddAffililateDialog'
import AffiliatesActions from './Components/AffiliatesActions'
import {
    setAllColumnsVisibility,
    setColumnVisibility
} from './Store/affiliatesSlice'

function Affiliates() {

    const tabs = [
        { label: "Dashboard", value: "creditor-dashboard" },
        { label: "Affiliates", value: "affiliates" },
        { label: "Commission", value: "commission" },
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
            field: 'name',
            headerName: 'name',
            width: 200,
            headerClassName: 'separator-header',
            renderCell: SwitchCell,
            hidable: true,
            hide: false,
        },
        {
            field: 'company',
            headerName: 'company',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },

        {
            field: 'email',
            headerName: 'email',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            field: 'totalCommission',
            headerName: 'Total Commission',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            field: 'clientReferred',
            headerName: 'Client Referred',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
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


    ]
    const affiliates = [
        {
            id: 1,
            name: "Imran Hashmi",
            company: "SB-BC",
            email: "email@gmail.kaam",
            totalCommission: "$5300",
            clientReferred: "Gen Bajwa",
            status: "active"
        },
        {
            id: 2,
            name: "Imran Hashmi",
            company: "SB-BC",
            email: "email@gmail.kaam",
            totalCommission: "$5300",
            clientReferred: "Gen Bajwa",
            status: "active"
        },
        {
            id: 3,
            name: "Imran Hashmi",
            company: "SB-BC",
            email: "email@gmail.kaam",
            totalCommission: "$5300",
            clientReferred: "Gen Bajwa",
            status: "active"
        },
        {
            id: 4,
            name: "Imran Hashmi",
            company: "SB-BC",
            email: "email@gmail.kaam",
            totalCommission: "$5300",
            clientReferred: "Gen Bajwa",
            status: "active"
        },
        {
            id: 5,
            name: "Imran Hashmi",
            company: "SB-BC",
            email: "email@gmail.kaam",
            totalCommission: "$5300",
            clientReferred: "Gen Bajwa",
            status: "active"
        },
    ]

    const [selectedInstructions, setSelectedInstructions] = useState([])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Affiliates"
                actionButtons={
                    <AffiliatesActions
                        selectedInstructions={selectedInstructions}
                    />
                }
            />
            <Table
                autoHeight={true}
                title="instructions"
                onSelectionModelChange={(selected) =>
                    setSelectedInstructions(selected)
                }

                columns={columns}
                rows={affiliates}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />
            <AddInstructionDialog />
        </>
    )
}

export default Affiliates