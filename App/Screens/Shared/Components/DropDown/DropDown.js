import { camelToTitle } from '@Config/helper';
import { themeObj } from '@Config/theme';
import {
    alpha,
    createTheme,
    InputBase,
    styled,
    ThemeProvider
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

let dropDownTheme = createTheme({
    ...themeObj,
    palette: {
        ...themeObj.palette,
        mode: 'light',
    }
})

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
        error
    } = props || {}

    const [age, setAge] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <ThemeProvider theme={dropDownTheme}>
            <FormControl sx={{}} size="small">
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    onChange={handleChange}
                    placeholder={`Enter ${camelToTitle(name)}`}
                    input={<TextField />}
                >
                    <MenuItem value={null}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default DropDown