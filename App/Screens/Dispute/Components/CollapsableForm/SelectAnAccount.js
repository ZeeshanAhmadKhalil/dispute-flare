import Stepper from '@Components/Stepper/Stepper';
import CheckBoxesCell from '@Components/Table/Components/CheckBoxesCell/CheckBoxesCell';
import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import Table from '@Components/Table/Table';
import {
    useTheme
} from '@mui/material';
import { Box } from '@mui/system';

function SelectAnAccount(props) {

    const {
        watch,
        steps,
        errors,
        control,
        register,
        bureauList,
        currentStep,
    } = props || {}

    let columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 50,
            hide: true,
            hidable: true,
        },
        {
            field: 'creditor',
            headerName: 'Creditor',
            width: 210,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'accountNumber',
            headerName: 'Account',
            width: 120,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'dispute',
            headerName: 'Dispute',
            width: 180,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'reason',
            headerName: 'Reason',
            width: 180,
            hidable: true,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Unverified account', 'Verified account'],
            renderCell: ({ value }) => <DropDownCell value={value} />,
        },
        {
            field: 'instruction',
            headerName: 'Instruction',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
        },
        {
            field: 'bureaus',
            headerName: 'Bureaus',
            width: 250,
            headerClassName: 'separator-header',
            hidable: true,
            renderCell: (props) => {

                let index
                    = props.api.getRowIndex(props.row.id)

                return <CheckBoxesCell
                    name={`steps[${currentStep}].creditors[${index}].bureaus`}
                    errors={errors}
                    control={control}
                    watch={watch}
                    list={bureauList}
                />
            }
        },
    ]
    let rows = [
        {
            id: 1,
            creditor: "HDEKE (Original Creditor: 09)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 2,
            creditor: "EISD (Original Creditor: 10A)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 3,
            creditor: "EWISD (Original Creditor: 11)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
        {
            id: 4,
            creditor: "JEW (Original Creditor: 12 AT T)",
            accountNumber: "743462***",
            type: "Collection",
            dispute: "Lorem ipsum",
            reason: "Unverified account",
            instruction: "Lorem ipsum is a",
            bureaus: "bureaus",
        },
    ]

    const {
        palette: {
            borders,
        }
    } = useTheme()

    return (

        <Box
            sx={{
                mt: 3,
            }}
        >
            <Stepper
                currentStep={currentStep}
                steps={steps}
            />
            <Table
                title="Creditors"
                checkboxSelection={false}
                columns={columns}
                rows={rows}
                height={280}
                borderColor={borders?.gray}
                hidePagination={true}
            />
        </Box>
    )
}

export default SelectAnAccount