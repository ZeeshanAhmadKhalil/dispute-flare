import MuiCheckbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';

export default function CheckBox({
    props,
    styles = {}
}) {

    const {
        checked: value,
    } = props

    const {
        palette: {
            checkbox: {
                checked,
                unchecked,
            }
        }
    } = useTheme()

    return (
        <MuiCheckbox
            {...props}
            style={{
                color: value ?
                    checked
                    :
                    unchecked,
            }}
            sx={{
                border: '1px splid red'
            }}
        />
    );
}
