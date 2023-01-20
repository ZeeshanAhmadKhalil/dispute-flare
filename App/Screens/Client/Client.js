import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useState
} from 'react';
import {
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

    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

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
                onSelectionModelChange={(selected) =>
                    setSelectedClients(selected)
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