import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect
} from 'react';
import CreditScoreReport from './Components/CreditScoreReport';

function InternalNotes(props) {

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="REPORT"
            />
            <CreditScoreReport />
        </>
    )
}

export default InternalNotes