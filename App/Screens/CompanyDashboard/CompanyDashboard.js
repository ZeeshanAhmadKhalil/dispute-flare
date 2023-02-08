import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CompanyDashboard() {

    const tabs = [
        { label: "Dashboard", value: "company-dashboard" },
        { label: "Company Profile", value: "company-profile" },
        { label: "Team", value: "team" },
        { label: "Flare Mail", value: "flare-mail" },
        { label: "Billing", value: "billing" },
    ]

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Dashboard"
                actionButtons={null}
            />
        </>
    )
}

export default CompanyDashboard