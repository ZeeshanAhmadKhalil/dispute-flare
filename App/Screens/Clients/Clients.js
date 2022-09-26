import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setAllColumnsVisibility, setColumnVisibility } from './Store/clientsSlice';

function Clients(props) {

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
                selectedClients={selectedClients}
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
        </>
    )
}

export default Clients