import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from 'classnames';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import Table from '@Components/Table/Table';

function Clients(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 200, hide: true },
        { field: 'clientName', headerName: 'Client Name', width: 200, headerClassName: 'custom-header', },
        { field: 'email', headerName: 'Email', width: 200, headerClassName: 'custom-header', },
        { field: 'mobile', headerName: 'Mobile', width: 200, headerClassName: 'custom-header', },
        { field: 'assignedTo', headerName: 'Assigned To', width: 200, headerClassName: 'custom-header', },
        { field: 'followUp', headerName: 'Follow Up', width: 200, headerClassName: 'custom-header', },
        { field: 'lastLogin', headerName: 'Last Login', width: 200, headerClassName: 'custom-header', },
        { field: 'status', headerName: 'Status', width: 200, headerClassName: 'custom-header', },
    ];

    const clients = [
        {
            id: 1,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 2,
            clientName: 'John H. Doe',
            email: 'John@gmail.com',
            mobile: '(000) 000 - 0000',
            assignedTo: 'J Williasaom',
            followUp: '12/02/2022',
            lastLogin: 'June 22, 12:20 PM',
            status: 'Active',
        },
        {
            id: 3,
            clientName: 'John H. Doe',
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
                columns={columns}
                rows={clients}
            />
        </>
    )
}

export default Clients