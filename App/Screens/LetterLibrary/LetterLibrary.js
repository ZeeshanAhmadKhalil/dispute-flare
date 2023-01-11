import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { Divider, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LetterLibraryActions from "./Components/LetterLibraryActions";
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/letterlibrarySlice';
import Title from './Components/Title';



const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
        hide: true,
        hidable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Title,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Title,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Title,
    },
    {
        field: 'rounds',
        headerName: 'Rounds',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Title,
    },
    {
        field: 'addedBy',
        headerName: 'Added By',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: Title,
    },


]
const letters = [
    {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }, {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }, {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }, {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }, {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    }, {
        id: 1,
        title: "credit card",
        type: "type A",
        reason: "IDK",
        rounds: "6",
        addedBy: "James Bond"
    },]


function LetterLibrary(props) {
    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instruction", value: "instruction" }
    ]
    const {
        palette
    } = useTheme()
    const {
        selectedClientId
    } = useSelector(state => state.shared)
    const [selectedDocuments, setSelectedDocuments] = useState([])



    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="Letter Library"
                actionButtons={
                    <LetterLibraryActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />

            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />


            <Table
                autoHeight={true}
                title="Documents"
                onSelectionModelChange={(selected) =>
                    setSelectedDocuments(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={letters}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />


        </>
    )
}

export default LetterLibrary