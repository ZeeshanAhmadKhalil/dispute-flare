import Button from '@Components/Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import {
    DialogActions,
    DialogContent,
    DialogTitle,
    styled,
    useTheme
} from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import cls from 'classnames';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
        shadow,
    } = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.xxxxOff,
            color: text.contrastText,
            borderRadius: 0,
            margin: 0,
            minWidth: '40%',
            maxWidth: '75%',
            overflow: 'visible',
        },
        '& .MuiDialogContent-root': {
            padding: 15,
        },
        '& .MuiDialog-container': {
            justifyContent: "flex-end",
            alignItems: "flex-start",
        },
        '& .MuiDialogActions-root': {
            backgroundColor: dialog.main,
            justifyContent: 'flex-start',
            boxShadow: `0px 2px 7px -3px ${shadow.main}`,
            zIndex: 99,
        },
    }
})

const Title = (props) => {
    const { children,
        onClose,
        ...other
    } = props;

    const {
        palette: {
            text,
            shadow,
        }
    } = useTheme()

    return (
        <DialogTitle
            sx={{
                m: 0,
                py: 1,
                px: 2,
                fontSize: 20,
                fontWeight: '500',
                color: text.grey,
                boxShadow: `0px 2px 7px -5px ${shadow.main}`,
                zIndex: 99,
            }}
            {...other}
        >
            {children}
        </DialogTitle>
    );
};

function RightDialogLayout(props) {

    const {
        children,
        onClose,
        open,
        closeBtnText,
        title,
        actionButtons,
    } = props || {}

    const {
        palette: {
            text: { grey }
        }
    } = useTheme()

    return (
        <Dialog
            TransitionComponent={Transition}
            className={cls(
                'h-full'
            )}
            onClose={onClose}
            open={open}
            fullScreen={true}
        >
            <Title
                id="customized-dialog-title"
                onClose={null}
            >
                {title}
            </Title>
            <DialogContent>
                {children}
            </DialogContent >
            <DialogActions
                sx={{
                    px: 2,
                    py: 1.5,
                }}
            >
                {actionButtons}
            </DialogActions>
            <Button
                onClick={onClose}
                color={"info"}
                startIcon={<CloseIcon />}
                style={{
                    borderRadius: 3,
                    marginRight: 10,
                    position: 'absolute',
                    top: 20,
                    left: -99,
                    borderRadius: 30,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    width: 100,
                }}
            >
                {closeBtnText}
            </Button>
        </Dialog >
    );
}

export default RightDialogLayout