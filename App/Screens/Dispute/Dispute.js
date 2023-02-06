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
    } = useSelector(state => state.dispute)
    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedDisputes, setSelectedDisputes] = useState([])

    useEffect(() => {
    }, [])

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
                onSelectionModelChange={(selected) =>
                    setSelectedDisputes(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                noRowsAction={() => {
                    dispatch(setDisputeDialog(true))
                }}
                columns={columns}
                rows={
                    selectedClientId == 1 ?
                        disputes
                        :
                        []
                }
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
            <AddCreditMonitoringInfoDialog />
            <AddDisputeDialog />
            <FollowUpDialog />
        </>
    )
}

export default Dispute