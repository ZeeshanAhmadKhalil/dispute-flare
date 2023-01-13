import {
    camelToBreadcrumbs,
    camelToTitle
} from '@Config/helper';
import {
    alpha,
    InputBase,
    styled,
    Typography,
    useTheme
} from '@mui/material';

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
        width: width ? width : 250,
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
        width,
        fullWidth
    } = props || {}

    const {
        palette: {
            cancelled,
        }
    } = useTheme()

    return (
        <div
            style={{
                position: 'relative',
            }}
        >
            <TextField
                {...register}
                autoComplete={false}
                type={name}
                id={camelToBreadcrumbs(name)}
                variant="outlined"
                width={width ? width : null}
                fullWidth
                placeholder={
                    placeholder ?
                        placeholder
                        :
                        `Enter ${camelToTitle(name)}`
                }
            />
            {error &&
                <div
                    style={{
                        height: 15,
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: -15,
                    }}
                >
                    <Typography
                        color={cancelled.main}
                        lineHeight={0}
                        variant="caption"
                        component="div"
                    >
                        {`${camelToTitle(name)} is required`}
                    </Typography>
                </div>
            }
        </div>
    )
}

export default TextInput