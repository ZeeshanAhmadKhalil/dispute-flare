import DefaultCell from '@Components/DefaultCell/DefaultCell';
import IOSSwitch from '@Components/IOSSwitch/IOSSwitch';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import {
    FormControlLabel,
    FormGroup
} from '@mui/material';
import React, { useState } from 'react';
import AddInstructionDialog from './Components/AddInstruction/AddInstructionDialog';
import InstructionActions from './Components/InstructionActions';

const tabs = [
    { label: "Letter Flow", value: "letterlibrary" },
    { label: "Templates", value: "templates" },
    { label: "Reasons", value: "reasons" },
    { label: "Instructions", value: "instructions" }
]
const instructions = [
    {
        id: 1,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: 2,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: 3,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: 4,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: 5,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: 6,
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
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
        renderCell: DefaultCell,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: () => (
            <FormGroup>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label="active"
                />
            </FormGroup>
        ),
    },
    {
        field: 'addedBy',
        headerName: 'Added By',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: DefaultCell,
    },


]

function Instructions() {

    const [selectedInstructions, setSelectedInstructions] = useState([])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Reasons"
                actionButtons={
                    <InstructionActions
                        selectedInstructions={selectedInstructions}
                    />
                }
            />
            <Table
                autoHeight={true}
                title="instructions"
                onSelectionModelChange={(selected) =>
                    setSelectedInstructions(selected)
                }

                columns={columns}
                rows={instructions}
            />
            <AddInstructionDialog />
        </>
    )
}

export default Instructions