import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import DefaultCell from '@Components/DefaultCell/DefaultCell';
import { Divider, FormControlLabel, FormGroup, useTheme, styled } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/instructionsSlice';
import AddInstructionDialog from './Components/AddInstruction/AddInstructionDialog';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import InstructionActions from './Components/InstructionActions';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


const instructions = [
    {
        id: 1,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 2,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 3,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 4,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 5,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    }, {
        id: 6,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },]


function Instructions(props) {

    const [checked, setChecked] = React.useState(true);
    const [selectedInstructions, setSelectedInstructions] = useState([])

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
            field: 'instruction',
            headerName: 'Instruction',
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
        selectedInstructionsId
    } = useSelector(state => state.shared)



    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="Reasons"
                actionButtons={
                    <InstructionActions
                        selectedInstructions={selectedInstructions}
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
                title="instructions"
                onSelectionModelChange={(selected) =>
                    setSelectedInstructions(selected)
                }

                columns={columns}
                rows={instructions}
                setColumnVisibility={setColumnVisibility}
                setAllColumnsVisibility={setAllColumnsVisibility}
            />


            <AddInstructionDialog />
        </>
    )
}

export default Instructions