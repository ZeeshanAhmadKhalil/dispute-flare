import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import Report from './Components/Report';

function InternalNotes(props) {

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="REPORT"
            />
            <Report />
        </>
    )
}

export default InternalNotes