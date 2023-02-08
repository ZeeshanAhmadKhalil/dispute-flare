import TopTabs from '@Components/TopTabs/TopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddCreditMonitoringInfoDialog from './Components/AddCreditMonitoringInfoDialog';
import AddDisputeDialog from './Components/AddDisputeDialog';
import DisputeActions from './Components/DisputeActions';
import FollowUpDialog from './Components/FollowUpDialog';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
    setDefaultColumnsVisibility,
    setDisputeDialog
} from './Store/disputeSlice';
import PrintDialog from '@Components/PrintDialog/PrintDialog';
import DefaultCell from '@Components/Table/Components/DefaultCell/DefaultCell';
import SecretCell from '@Components/Table/Components/SecretCell/SecretCell';

let tblColumns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 50,
        hide: true,
        hidable: true,
    },
    {
        field: 'creditor',
        headerName: 'Creditor',
        width: 210,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
    {
        field: 'account',
        headerName: 'Account',
        width: 120,
        headerClassName: 'separator-header',
        hidable: true,
        renderCell: SecretCell,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 120,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
    {
        field: 'dispute',
        headerName: 'Dispute',
        width: 180,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 180,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
    {
        field: 'instruction',
        headerName: 'Instruction',
        width: 200,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
    {
        field: 'bureaus',
        headerName: 'Bureaus',
        width: 180,
        headerClassName: 'separator-header',
        renderCell: DefaultCell,
        hidable: true,
    },
]
let tblRows = [
    {
        id: 1,
        creditor: "HDEKE (Original Creditor: 09)",
        account: "74346256747565758678456",
        type: "Collection",
        dispute: "Lorem ipsum",
        reason: "Unverified account",
        instruction: "Lorem ipsum is a",
        bureaus: null,
    },
    {
        id: 2,
        creditor: "EISD (Original Creditor: 10A)",
        account: "74346256747565758678456",
        type: "Collection",
        dispute: "Lorem ipsum",
        reason: "Unverified account",
        instruction: "Lorem ipsum is a",
        bureaus: null,
    },
    {
        id: 3,
        creditor: "EWISD (Original Creditor: 11)",
        account: "74346256747565758678456",
        type: "Collection",
        dispute: "Lorem ipsum",
        reason: "Unverified account",
        instruction: "Lorem ipsum is a",
        bureaus: null,
    },
    {
        id: 4,
        creditor: "JEW (Original Creditor: 12 AT T)",
        account: "74346256747565758678456",
        type: "Collection",
        dispute: "Lorem ipsum",
        reason: "Unverified account",
        instruction: "Lorem ipsum is a",
        bureaus: null,
    },
]

function Dispute() {

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]
    const dispatch = useDispatch()

    const {
        columns,
        disputes,
        addDisputeDialog,
    } = useSelector((state: any) => state.dispute)
    const {
        selectedClientId
    } = useSelector((state: any) => state.shared)

    const [selectedDisputes, setSelectedDisputes] = useState<number[]>([])

    const getTables = () => {

        let tables: any = []

        let selected = disputes
            .filter((obj: any) =>
                selectedDisputes.includes(obj.id)
            )

        selected.map((item: any) => {

            if (!tables.some((obj: any) => obj.name == item.type))
                tables.push({
                    name: item.type,
                    rows: [item]
                })
            else {

                let index =
                    tables.findIndex((obj: any) =>
                        obj.name == item.type
                    )

                tables[index].rows = [
                    ...tables[index].rows,
                    item,
                ]
            }
        })

        return tables
    }

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Dispute"
                actionButtons={
                    <DisputeActions
                        selectedDisputes={selectedDisputes}
                    />
                }
            />
            <Table
                title="Dispute"
                onSelectionModelChange={(selected: any) =>
                    setSelectedDisputes(selected)
                }
                hasCreditMonitoringInfo={true}
                noRowsAction={() => {
                    dispatch(setDisputeDialog(true))
                }}
                columns={columns}
                rows={disputes}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
            <AddCreditMonitoringInfoDialog />
            <AddDisputeDialog
                columns={tblColumns}
                rows={tblRows}
            />
            <FollowUpDialog />
            {!addDisputeDialog &&
                <PrintDialog
                    columns={tblColumns}
                    tables={getTables()}
                />
            }
        </>
    )
}

export default Dispute