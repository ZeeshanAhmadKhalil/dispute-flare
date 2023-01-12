import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CreditScoreReport(props) {

    const dispatch = useDispatch()

    const { } = useSelector(state => state.shared)

    const [state, setState] = useState(null)

    useEffect(() => {
    }, [])

    return (
        <Box >
            
        </Box>
    )
}

export default CreditScoreReport