import {
    camelToBreadcrumbs,
    camelToTitle
} from '@Config/helper';
import { lightTheme } from '@Config/theme';
import {
    alpha,
    InputBase,
    styled,
    ThemeProvider,
    useTheme
} from '@mui/material';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import cls from 'classnames';
import Clock from 'public/Assets/Svgs/clock.svg';
import { Controller } from 'react-hook-form';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TextField = styled(InputBase)(({ theme, width }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: theme.palette.dialog.main,
        color: theme.palette.text.contrastText,
        border: `1px solid ${theme.palette.tableSeparator.dark}`,
        fontSize: 14,
        width,
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

const IconContainer = styled(Box)(() => ({
    position: 'absolute',
    right: 0,
}))

function TimePicker(props) {

    const {
        name,
        error,
        styles,
        control,
        width = 250,
    } = props || {}

    const {
        palette: {
            icon: {
                input,
            }
        }
    } = useTheme()

    return (
        <ThemeProvider theme={lightTheme}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MuiTimePicker
                            label={camelToTitle(name)}
                            value={value}
                            onChange={onChange}
                            id={camelToBreadcrumbs(name)}
                            components={{
                                OpenPickerIcon: () => (
                                    <AccessTimeIcon
                                        sx={{
                                            color: input,
                                            fontSize: 18,
                                        }}
                                    />
                                )
                            }}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box
                                    className={cls(
                                        'border-red-700', 'border-0',
                                    )}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        width: width + 10,
                                        ...styles,
                                    }}
                                >
                                    <TextField
                                        {...inputProps}
                                        readOnly
                                        placeholder={camelToTitle(name)}
                                        width={width}
                                        ref={inputRef}
                                        variant="outlined"
                                    />
                                    <IconContainer>
                                        {InputProps?.endAdornment}
                                    </IconContainer>
                                </Box>
                            )}
                        />
                    </LocalizationProvider>
                )}
            />
        </ThemeProvider>
    )
}

export default TimePicker