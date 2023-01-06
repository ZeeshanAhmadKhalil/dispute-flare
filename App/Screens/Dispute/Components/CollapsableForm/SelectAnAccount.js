import CollapsableForm from '@Components/CollapsableForm/CollapsableForm';
import Stepper from '@Components/Stepper/Stepper';
import {
    styled,
    Typography,
    useTheme
} from '@mui/material';
import { useSelector } from 'react-redux';

const Label = styled(Typography)(({ theme }) => {

    const {
        text: { xxxGrey },
    } = theme.palette

    return {
        color: xxxGrey,
        fontWeight: 500,
    }
})

function SelectAnAccount(props) {

    const {
        register,
        control,
        errors,
        watch,
    } = props || {}

    const {
        palette: {
            dialog: {
                main,
            }
        }
    } = useTheme()

    const {
    } = useSelector(state => state.dispute)

    return (
        <CollapsableForm
            title="Select an account"
            defaultOpen={true}
            collapseBgColor={main}
        >
            <Stepper
                steps={[
                    "Collections",
                    "Late Payment",
                    "Inquiries",
                    "Chargeoffs",
                    "Others",
                ]}
            />
        </CollapsableForm >
    )
}

export default SelectAnAccount