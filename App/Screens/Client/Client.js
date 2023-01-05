import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddClientDialog from './Components/AddClient/AddClientDialog';
import ClientActions from './Components/ClientActions';
import ImportClientsDialog from './Components/ImportClients/ImportClientsDialog';
import {
    setAllColumnsVisibility,
    setColumnVisibility
} from './Store/clientsSlice';

function Client(props) {

    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

    const [selectedClients, setSelectedClients] = useState([])

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
                columns={columns}
                rows={clients}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />
            <AddClientDialog />
            <ImportClientsDialog />
        </>
    )
}

export default Client