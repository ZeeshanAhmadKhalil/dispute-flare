import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import DefaultCell from '@Components/DefaultCell/DefaultCell';
import { Divider, FormControlLabel, FormGroup, Switch, Tab, Tabs, Typography, useTheme, styled } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplatesActions from "./Components/ReasonActions";
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/reasonsSlice';
import Title from './Components/Title';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import ReasonsAction from './Components/ReasonActions';
import AddReasonDialog from './Components/AddReason/AddReasonDialog';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


const reasons = [
    {
        id: 1,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 2,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 3,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 4,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 5,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 6,
        title: "credit card",
        status: "active",
        addedBy: "James Bond"
    },]


function Instructions(props) {

    const [checked, setChecked] = React.useState(true);
    const [selectedReasons, setSelectedReasons] = useState([])

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
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
                title="Reasons"
                actionButtons={
                    <ReasonsAction
                        selectedReasons={selectedReasons}
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
                title="reasons"
                onSelectionModelChange={(selected) =>
                    setSelectedReasons(selected)
                }
                hasCreditMonitoringInfo={
                    selectedClientId == 1 ||
                    selectedClientId == 2
                }
                columns={columns}
                rows={reasons}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />


            <AddReasonDialog />
        </>
    )
}

export default Instructions