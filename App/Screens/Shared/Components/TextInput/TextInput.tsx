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

const TextField
    = styled(InputBase)(({
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
            width: width ? width : 250,
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

function TextInput(props: any) {

    const {
        icon,
        name,
        width,
        error,
        register,
        multiline,
        placeholder,
        containerStyle,
        rows = undefined,
    } = props || {}

    const {
        palette: {
            cancelled,
        }
    }: any = useTheme()

    return (
        <div
            style={{
                position: 'relative',
                border: '0px solid red'
            }}
        >
            <div
                style={{
                    position: 'relative',
                    border: '0px solid red',
                    width: 'fit-content',
                    ...containerStyle,
                }}
            >
                <TextField
                    {...register}
                    rows={rows}
                    multiline={multiline}
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
                {icon &&
                    <div
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 10,
                        }}
                    >
                        {icon}
                    </div>
                }
            </div>
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