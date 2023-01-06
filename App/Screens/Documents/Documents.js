import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadedDocuments from './Components/UploadedDocuments';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
    setDefaultColumnsVisibility
} from './Store/documentsSlice';

function Documents(props) {

    const dispatch = useDispatch()

    const {
        columns,
        documents,
    } = useSelector(state => state.documents)
    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedClients, setSelectedClients] = useState([])

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="Documents"
            // actionButtons={
            //     <ClientActions
            //         selectedClients={selectedClients}
            //     />
            // }
            />
            <UploadedDocuments />
            <Table
                title="Documents"
                onSelectionModelChange={(selected) =>
                    setSelectedClients(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={documents}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
                setDefaultColumnsVisibility={setDefaultColumnsVisibility}
            />
        </>
    )
}

export default Documents