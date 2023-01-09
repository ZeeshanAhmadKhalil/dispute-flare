import Stepper from '@Components/Stepper/Stepper';
import Table from '@Components/Table/Table';
import {
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

function SelectAnAccount(props) {

    const {
        register,
        control,
        errors,
        watch,
        currentStep,
        steps,
    } = props || {}

    const {
        palette: {
            dialog: {
                main,
            }
        }
    } = useTheme()

    const {
        columns,
        clients,
    } = useSelector(state => state.clients)

    console.log("clients===>", clients)

    const {
    } = useSelector(state => state.dispute)

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
                title="Clients"
                onSelectionModelChange={(selected) =>
                    setSelectedClients(selected)
                }
                columns={columns}
                rows={clients}
                setColumnVisibility={true}
                setAllColumnsVisibility={true}
            />
        </Box>
    )
}

export default SelectAnAccount