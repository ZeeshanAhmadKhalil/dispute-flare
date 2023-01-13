import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import DefaultCell from '@Components/DefaultCell/DefaultCell';
import { Divider, FormControlLabel, FormGroup, Switch, Tab, Tabs, Typography, useTheme, styled } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplatesActions from "./Components/TemplatesActions";
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/templatesSlice';
import Title from './Components/Title';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import AddLetterTemplateDialog from './Components/AddLetterTemplate/AddLetterTemplateDialog';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


const letters = [
    {
        id: 1,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    }, {
        id: 2,
        title: "credit card",
        category: "CAT A",
        status: "inactive",
        type: "A",
        addedBy: "James Bond"
    }, {
        id: 3,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    }, {
        id: 4,
        title: "credit card",
        category: "CAT A",
        status: "active",
        type: "A",
        addedBy: "James Bond"
    },]


function Templates(props) {

    const [checked, setChecked] = React.useState(true);
    const [selectedDocuments, setSelectedDocuments] = useState([])

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instruction", value: "instruction" }
    ]


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
            field: 'category',
            headerName: 'Category',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <FormGroup>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label="active"
                />
            </FormGroup>,
        },
        {
            field: 'addedBy',
            headerName: 'Added By',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: ({ value }) => <DefaultCell value={value} />,
        },


    ]
    const {
        palette
    } = useTheme()
    const {
        selectedClientId
    } = useSelector(state => state.shared)



    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="Templates"
                actionButtons={
                    <TemplatesActions
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
                title="templates"
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


            <AddLetterTemplateDialog />
        </>
    )
}

export default Templates