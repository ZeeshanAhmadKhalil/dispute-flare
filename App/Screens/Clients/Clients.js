import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from 'classnames';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import Table from '@Components/Table/Table';

function Clients(props) {

    const dispatch = useDispatch()

    const { } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <>
            <TitleHeader />
            <Table />
        </>
    )
}

export default Clients