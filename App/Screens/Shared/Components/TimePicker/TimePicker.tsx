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

const TextField = styled(InputBase)(({
    theme: {
        spacing,
        palette: {
            dialog,
            text,
            tableSeparator,
            primary,
        },
        transitions,
    },
    width
}: any) => ({
    'label + &': {
        marginTop: spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: dialog.main,
        color: text.contrastText,
        border: `1px solid ${tableSeparator.dark}`,
        fontSize: 14,
        width,
        height: 10,
        padding: '10px 12px',
        transition: transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: primary.main,
        },
    },
}));

const IconContainer = styled(Box)(() => ({
    position: 'absolute',
    right: 0,
}))

function TimePicker(props: any) {

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
    }: any = useTheme()

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
                            renderInput={({
                                inputRef,
                                inputProps,
                                InputProps
                            }: any) => (
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
                                        ref={inputRef}
                                        width={width}
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