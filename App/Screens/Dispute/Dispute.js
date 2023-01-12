import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
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

function Dispute(props) {

    const dispatch = useDispatch()

    const {
        columns,
        disputes,
    } = useSelector(state => state.dispute)
    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedClients, setSelectedClients] = useState([])

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="Dispute"
                actionButtons={
                    <DisputeActions
                        selectedClients={selectedClients}
                    />
                }
            />
            <Table
                title="Dispute"
                onSelectionModelChange={(selected) =>
                    setSelectedClients(selected)
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