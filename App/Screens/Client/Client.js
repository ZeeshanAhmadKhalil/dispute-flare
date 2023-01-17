import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { setSelectedClientId } from '@Screens/Shared/Store/sharedSlice';
import { useRouter } from 'next/router';
import {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import AddClientDialog from './Components/AddClient/AddClientDialog';
import ClientActions from './Components/ClientActions';
import ImportClientsDialog from './Components/ImportClients/ImportClientsDialog';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
    setDefaultColumnsVisibility
} from './Store/clientsSlice';

function Client(props) {

    const router = useRouter()
    const dispatch = useDispatch()

    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

    const [selectedClients, setSelectedClients] = useState([])

    const onRowClick = ({
        id
    }) => {
        dispatch(setSelectedClientId(id))
        router.push('client-dashboard')
    }

    useEffect(() => {
    }, [])

    return (
        <>
            <TitleHeader
                title="Clients"
                actionButtons={
                    <ClientActions
                        selectedClients={selectedClients}
                    />
                }
            />
            <Table
                title="Clients"
                onSelectionModelChange={(selected) =>
                    setSelectedClients(selected)
                }
                onRowClick={onRowClick}
                columns={columns}
                rows={clients}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
            <AddClientDialog />
            <ImportClientsDialog />
        </>
    )
}

export default Client