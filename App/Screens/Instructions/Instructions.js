import DefaultCell from '@Components/DefaultCell/DefaultCell';
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { useState } from 'react';
import AddInstructionDialog from './Components/AddInstruction/AddInstructionDialog';
import InstructionActions from './Components/InstructionActions';

const tabs = [
    { label: "Letter Flow", value: "letter-library" },
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
        renderCell: SwitchCell,
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
            <TopTabs
                left={143}
                tabs={tabs}
            />
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