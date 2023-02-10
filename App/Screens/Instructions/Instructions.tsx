import DefaultCell from '@Components/Table/Components/DefaultCell/DefaultCell';
import SwitchCell from '@Components/Table/Components/SwitchCell/SwitchCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddInstructionDialog from './Components/AddInstruction/AddInstructionDialog';
import InstructionActions from './Components/InstructionActions';
import { setAddInstructionsDialog } from './Store/instructionsSlice';

const tabs = [
    { label: "Letter Flow", value: "letter-library" },
    { label: "Templates", value: "templates" },
    { label: "Reasons", value: "reasons" },
    { label: "Instructions", value: "instructions" }
]
const instructions = [
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
        instruction: "Collection Validation",
        status: "active",
        addedBy: "James Bond"
    },
    {
        id: getId(),
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

    const dispatch = useDispatch()

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
                title="instructions"
                onSelectionModelChange={(selected: any) =>
                    setSelectedInstructions(selected)
                }
                noRowsAction={() =>
                    dispatch(setAddInstructionsDialog(true))
                }
                columns={columns}
                rows={instructions}
            />
            <AddInstructionDialog />
        </>
    )
}

export default Instructions