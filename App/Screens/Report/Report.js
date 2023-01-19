import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import {
    useEffect
} from 'react';
import CreditScoreReport from './Components/CreditScoreReport';

function Report(props) {

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]

    useEffect(() => {
    }, [])

    return (
        <>
            <TopTabs tabs={tabs} />
            <ScrollContainer>
                <TitleHeader
                    title="REPORT"
                />
                <CreditScoreReport />
            </ScrollContainer>
        </>
    )
}

export default Report