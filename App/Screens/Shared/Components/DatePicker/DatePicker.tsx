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
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import cls from 'classnames';
import Calendar from 'public/Assets/Svgs/calendar.svg';
import { Controller } from 'react-hook-form';

const TextField
    = styled(InputBase)(({
        theme: {
            palette: {
                dialog,
                text,
                tableSeparator,
                primary,
            },
            spacing,
            transitions,
        } }: any) => ({
            'label + &': {
                marginTop: spacing(3),
            },
            '& .MuiInputBase-input': {
                position: 'relative',
                backgroundColor: dialog.main,
                color: text.contrastText,
                border: `1px solid ${tableSeparator.dark}`,
                fontSize: 14,
                width: 250,
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

function DatePicker(props: any) {

    const {
        control,
        name,
        error,
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
                        <MuiDatePicker
                            label={camelToTitle(name)}
                            value={value}
                            onChange={onChange}
                            components={{
                                OpenPickerIcon: () => (
                                    <Calendar
                                        width={15}
                                        height={15}
                                        color={input}
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
                                        'border-red-700',
                                        'border-0',
                                    )}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        width: 260,
                                    }}
                                >
                                    <TextField
                                        readOnly
                                        ref={inputRef}
                                        {...inputProps}
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

export default DatePicker