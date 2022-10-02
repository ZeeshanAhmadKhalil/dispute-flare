import {
    camelToBreadcrumbs,
    camelToTitle
} from '@Config/helper';
import {
    alpha,
    InputBase,
    styled
} from '@mui/material';
import { useEffect } from 'react';

const TextField = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: theme.palette.dialog.main,
        color: theme.palette.text.contrastText,
        border: `1px solid ${theme.palette.tableSeparator.dark}`,
        fontSize: 14,
        width: 250,
        height: 10,
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

function TextInput(props) {

    const {
        register,
        name,
        error,
        placeholder,
    } = props || {}

    useEffect(() => {
    }, [])

    return (
        <TextField
            {...register}
            id={camelToBreadcrumbs(name)}
            variant="outlined"
            placeholder={
                placeholder ?
                    placeholder
                    :
                    `Enter ${camelToTitle(name)}`
            }
        />
    )
}

export default TextInput