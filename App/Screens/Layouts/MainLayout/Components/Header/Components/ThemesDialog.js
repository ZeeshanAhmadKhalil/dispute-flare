import Button from '@Components/Button/Button';
import { setSelectedTheme, setThemesDialog } from '@Layouts/Store/layoutSlice';
import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    DialogActions,
    DialogContent,
    Paper,
    styled,
    useTheme
} from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import cls from 'classnames';
import Default from 'public/Assets/Svgs/default.svg';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import Theme from './Theme';

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
    } = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.main,
            color: text.contrastText,
            width: '776px',
        }
    }
})

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

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

function ThemesDialog(props) {

    const {
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
            dialog: {
                xxOff,
            },
        }
    } = useTheme()

    const {
        themes,
        themesDialog,
    } = useSelector(state => state.layout)

    function RenderThemes() {
        return themes.map((item, key) => {

            const {
                id,
                name,
                imagePath,
            } = item

            return (
                <Theme
                    imagePath={imagePath}
                    name={name}
                    id={id}
                />
            )
        })
    }

    return (
        <Dialog
            onClose={() => dispatch(setThemesDialog(false))}
            open={themesDialog}
            fullWidth={true}
            maxWidth="xmd"
            minWidth="xmd"
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <Title
                style={{ cursor: 'move' }}
                id="customized-dialog-title"
                onClose={() => dispatch(setThemesDialog(false))}
            >
                {`Themes`}
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
                    className={cls(
                        'rounded-lg',
                        'p-[8px]',
                        'mt-[12px]',
                        'cursor-pointer',
                    )}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        bgcolor: xxOff,
                    }}
                >
                    {RenderThemes()}
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
                        onClick={() => dispatch(setSelectedTheme(1))}
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
                            onClick={() => dispatch(setThemesDialog(false))}
                            style={{
                                borderRadius: 3,
                                paddingLeft: 20,
                                paddingRight: 20,
                                color: text.grey,
                                fontWeight: 'bold',
                                marginLeft: 30,
                            }}
                        >
                            SAVE
                        </Button>
                        <Button
                            color={"text"}
                            onClick={() => dispatch(setThemesDialog(false))}
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
                            onClick={null}
                            color={"text"}
                            disableElevation
                            style={{
                                color: text.grey,
                                fontWeight: 'bold'
                            }}
                        >
                            Custom
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default ThemesDialog