import MuiCheckbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';

export default function CheckBox({
    props,
    action,
}) {
    const {
        checked: value,
    } = props || {}


    const {
        palette: {
            checkbox,
        }
    } = useTheme()

    return (
        <MuiCheckbox
            onChange={(event) => {
                if (action)
                    action(event.target.checked)
            }}
            checked={value}
            {...props}
            style={{
                color: value ?
                    checkbox.checked
                    :
                    checkbox.unchecked,
            }}
        />
    );
}
