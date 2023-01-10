import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadedDocuments from './Components/UploadedDocuments';
import UploadingDocuments from './Components/UploadingFiles';
import DocumentsActions from "./Components/DocumentsActions";

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

    const [selectedDocuments, setSelectedDocuments] = useState([])

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs />
            <TitleHeader
                title="Documents"
                actionButtons={
                    <DocumentsActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />
            <Box sx={{ display: "flex", padding: "1rem" }}>
                <UploadedDocuments />
                <UploadingDocuments />
            </Box>
            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />
            <Table
                title="Documents"
                onSelectionModelChange={(selected) =>
                    setSelectedDocuments(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={documents}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />
            <UploadingDocuments />
        </>
    )
}

export default Documents