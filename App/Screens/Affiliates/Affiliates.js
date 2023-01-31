import DefaultCell from '@Components/DefaultCell/DefaultCell'
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell'
import Table from '@Components/Table/Table'
import TitleHeader from '@Components/TitleHeader/TitleHeader'
import TopTabs from '@Components/TopTabs/TopTabs'
import { getId } from '@Config/helper'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import AddAffililateDialog from './Components/AddAffiliate/AddAffililateDialog'
import AffiliatesActions from './Components/AffiliatesActions'
import {
    setAddAffiliatesDialog
} from './Store/affiliatesSlice'

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
        headerName: 'Name',
        width: 200,
        headerClassName: 'separator-header',
        renderCell: SwitchCell,
        hidable: true,
        hide: false,
    },
    {
        field: 'company',
        headerName: 'Company',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: ({ value }) => <DefaultCell value={value} />,
    },

    {
        field: 'email',
        headerName: 'Email',
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
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
    {
        id: getId(),
        name: "Imran Hashmi",
        company: "SB-BC",
        email: "email@gmail.kaam",
        totalCommission: "$5300",
        clientReferred: "Gen Bajwa",
        status: "active"
    },
]

function Affiliates() {

    const tabs = [
        { label: "Dashboard", value: "creditor-dashboard" },
        { label: "Affiliates", value: "affiliates" },
        { label: "Commission", value: "commission" },
    ]

    const dispatch = useDispatch()

    const [selectedAffiliates, setSelectedAffiliates] = useState([])

    const router = useRouter()
    return (
        <>
            <TopTabs
                tabs={tabs}
            />
            <TitleHeader
                title="Affiliates"
                actionButtons={
                    <AffiliatesActions
                        selectedInstructions={selectedAffiliates}
                    />
                }
            />
            <Table
                title="Affiliates"
                onSelectionModelChange={(selected) =>
                    setSelectedAffiliates(selected)
                }
                columns={columns}
                onRowClick={() =>
                    router.push('affiliate-dashboard')
                }
                rows={affiliates}
                noRowsAction={() =>
                    dispatch(setAddAffiliatesDialog(true))
                }
            />
            <AddAffililateDialog />
        </>
    )
}

export default Affiliates