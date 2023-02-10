
import {
    FormControlLabel,
    FormGroup,
    styled,
    Switch as MuiSwitch
} from "@mui/material";
import cls from 'classnames';

const Switch = styled(MuiSwitch)(({
    theme: {
        palette: {
            lead,
            grey,
            mode,
            toggleSwitch,
            secondary,
        },
        transitions,
    },
    checked,
}: any) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: mode === 'dark' ?
                    lead.main
                    :
                    lead.main,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: lead.main,
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                mode === 'light' ?
                    grey[100]
                    :
                    grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        width: 18,
        height: 18,
        border: `${checked ?
            "1"
            :
            "3"
            }px solid ${checked ?
                secondary.main
                :
                toggleSwitch.borderInactive
            }`,
    },
    '& .MuiSwitch-track': {
        height: 22,
        width: 38,
        border: `3px solid ${toggleSwitch.borderInactive}`,
        borderRadius: 26 / 2,

        backgroundColor: mode === 'light' ?
            '#E9E9EA'
            :
            '#39393D',
        opacity: 1,
        transition: transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


function ToggleSwitch({
    activeLabel,
    inactiveLabel,
    checked,
    setChecked,
}: any) {

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        onChange={() =>
                            setChecked((prev: any) => !prev)
                        }
                        disableRipple
                    />
                }
                label={
                    checked ?
                        activeLabel
                        :
                        inactiveLabel
                }
            />
        </FormGroup>
    )
}

export default ToggleSwitch
