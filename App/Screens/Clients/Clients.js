import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from 'classnames';

function Clients(props) {

    const dispatch = useDispatch()

    const { } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <div
            className={cls(
                `flex`,
                `h-full`,
                `border-blue-700`, `border-0`,
                `justify-center`,
                `items-center`
            )}
        >
            <span style={{ color: '#000', fontSize: 50, fontWeight: 'bold' }}>Clients</span>
        </div>
    )
}

export default Clients