import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
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
    setAddClientDialog,
    setAllColumnsVisibility,
    setColumnVisibility,
    setDefaultColumnsVisibility
} from './Store/clientsSlice';

function Client() {

    const dispatch = useDispatch()

    const {
        columns,
        clients,
    } = useSelector((state: any) => state.clients)

    const [selectedClients, setSelectedClients] = useState([])

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
                onSelectionModelChange={(selected: any) =>
                    setSelectedClients(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddClientDialog(true))
                }
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