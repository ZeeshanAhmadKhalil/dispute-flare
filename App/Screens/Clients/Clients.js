import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setAllColumnsVisibility, setColumnVisibility } from './Store/clientsSlice';

function Clients(props) {

    const {
        columns,
    } = useSelector(state => state.clients)

    const clients = [
        {
            id: 1,
            clientName: 'Zeeshan H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 2,
            clientName: 'Hamza H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 3,
            clientName: 'Khan H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 4,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 5,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 6,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 7,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 8,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 9,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 10,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
    ];

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