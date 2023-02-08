import ToggleSwitch from '@Components/ToggleSwitch/ToggleSwitch';
import { Box } from '@mui/material';
import cls from 'classnames';
import { useState } from 'react';

function SwitchCell(props) {

    const [checked, setChecked] = useState(false)

    return (
        <Box
            className={cls(
                'ml-1'
            )}
        >
            <ToggleSwitch
                checked={checked}
                setChecked={setChecked}
                activeLabel="Active"
                inactiveLabel="Inactive"
            />
        </Box>
    )
}

export default SwitchCell