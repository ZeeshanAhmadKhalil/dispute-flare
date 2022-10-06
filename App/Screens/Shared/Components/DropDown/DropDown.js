import {
    camelToBreadcrumbs,
    camelToTitle
} from '@Config/helper';
import { lightTheme } from '@Config/theme';
import {
    alpha,
    InputBase,
    styled,
    ThemeProvider
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

const TextField = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: theme.palette.dialog.main,
        color: theme.palette.text.contrastText,
        border: `1px solid ${theme.palette.tableSeparator.dark}`,
        fontSize: 14,
        width: 250,
        minHeight: '0px !important',
        height: '30px !important',
        padding: '0px !important',
        paddingLeft: '12px !important',
        paddingRight: '12px !important',
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

function DropDown(props) {

    const {
        register,
        name,
        error,
        list
    } = props || {}

    const [open, setOpen] = useState(false)
    const [showMenuItems, setShowMenuItems] = useState(false)

    function RenderList() {
        return list?.map?.((item, key) => {

            const { label, value } = item || {}

            return (
                <MenuItem
                    key={key}
                    value={value}
                >
                    {label}
                </MenuItem>
            )
        })
    }

    useEffect(() => {
        setShowMenuItems(false)
        const delayDebounceFn = setTimeout(() => {
            console.info(`${name} dropdown  "${open ? "opened" : "closed"}"`)
            setShowMenuItems(open)
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [open])

    return (
        <ThemeProvider theme={lightTheme}>
            <FormControl sx={{}} size="small">
                <Select
                    {...register}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    labelId={camelToBreadcrumbs(name)}
                    id={camelToBreadcrumbs(name)}
                    input={<TextField />}
                >
                    <MenuItem disabled value={""}>
                        <em>
                            {`Select ${camelToTitle(name)}`}
                        </em>
                    </MenuItem>
                    {RenderList()}
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default DropDown