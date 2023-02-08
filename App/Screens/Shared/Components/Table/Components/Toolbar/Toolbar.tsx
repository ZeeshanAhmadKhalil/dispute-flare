import Button from '@Components/Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    DialogActions,
    DialogContent,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckBox from '../CheckBox/CheckBox';
import Default from 'public/Assets/Svgs/default.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setToolbar } from '@Screens/Shared/Store/sharedSlice';

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
    } = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.main,
            color: text.contrastText,
        }
    }
})

const Title = (props) => {
    const { children,
        onClose,
        ...other
    } = props;

    const {
        palette: { text }
    } = useTheme()

    return (
        <DialogTitle
            sx={{
                m: 0,
                p: 2,
                fontSize: 20,
                fontWeight: 'bolder',
                color: text.grey,
            }}
            {...other}
        >
            {children}
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.icon.lightActive,
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
    );
};

function Toolbar(props) {

    const {
        title = "",
        columns,
        setColumnVisibility,
        setAllColumnsVisibility,
        setDefaultColumnsVisibility,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
            checkbox,
        }
    } = useTheme()

    const {
        toolbar
    } = useSelector(state => state.shared)

    function RenderColumns() {
        return columns
            .filter(obj => obj.hidable)
            .map((item, key) => {

                const {
                    headerName,
                    hide,
                    field,
                } = item

                return (
                    <Box
                        sx={{
                            display: 'flex',
                            backgroundColor: hide ? null : checkbox.checkBg,
                            alignItems: 'center',
                            height: 35,
                            width: 200,
                            marginRight: 5,
                            marginTop: 2,
                        }}
                    >
                        <CheckBox
                            props={{
                                checked: !hide,
                            }}
                            action={(hide) =>
                                dispatch(setColumnVisibility({ field, hide }))
                            }

                        />
                        <Typography
                            variant="subtitle2"
                            component="subtitle2"
                            sx={{
                                fontWeight: '600'
                            }}
                        >
                            {headerName}
                        </Typography>
                    </Box>
                )
            })
    }

    return (
        <Dialog
            onClose={() => dispatch(setToolbar(false))}
            open={toolbar}
            fullWidth={true}
            maxWidth="xmd"
        >
            <Title
                id="customized-dialog-title"
                onClose={() => dispatch(setToolbar(false))}
            >
                {`Table Settings - ${title}`}
            </Title>
            <Divider
                sx={{
                    backgroundColor: tableSeparator?.main
                }}
            />
            <DialogContent
                sx={{
                    paddingTop: 0
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flex: 3,
                    }}
                >
                    {RenderColumns()}
                </Box>
            </DialogContent>
            <Divider
                sx={{
                    backgroundColor: tableSeparator?.main
                }}
            />
            <DialogActions>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                    }}
                >
                    <Button
                        onClick={() =>
                            dispatch(setDefaultColumnsVisibility({ hide: true }))
                        }
                        startIcon={
                            <Default
                                height={14}
                                width={14}
                            />
                        }
                        color={"text"}
                        disableElevation
                        style={{
                            color: text.grey,
                            fontWeight: 'bold'
                        }}
                    >
                        Default
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            color={"primary"}
                            onClick={() => dispatch(setToolbar(false))}
                            style={{
                                borderRadius: 3,
                                paddingLeft: 20,
                                paddingRight: 20,
                                color: text.grey,
                                fontWeight: 'bold',
                                marginLeft: 30,
                            }}
                        >
                            DONE
                        </Button>
                        <Button
                            color={"text"}
                            onClick={() => dispatch(setToolbar(false))}
                            disableElevation
                            style={{
                                color: text.grey,
                                fontWeight: 'bold',
                                marginLeft: 10,
                            }}
                        >
                            CANCEL
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button
                            onClick={() =>
                                dispatch(setAllColumnsVisibility({ hide: false }))
                            }
                            color={"text"}
                            disableElevation
                            style={{
                                color: text.grey,
                                fontWeight: 'bold'
                            }}
                        >
                            Select all
                        </Button>
                        <Button
                            onClick={() =>
                                dispatch(setAllColumnsVisibility({ hide: true }))
                            }
                            color={"text"}
                            disableElevation
                            style={{
                                color: text.grey,
                                fontWeight: 'bold'
                            }}
                        >
                            Select none
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default Toolbar