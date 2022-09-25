import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setAllColumnsVisibility, setColumnVisibility } from './Store/clientsSlice';

function Clients(props) {

    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

    useEffect(() => {
    }, [])

    return (
        <>
            <TitleHeader />
            <Table
                title="Clients"
                columns={columns}
                rows={clients}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />
        </>
    )
}

export default Clients