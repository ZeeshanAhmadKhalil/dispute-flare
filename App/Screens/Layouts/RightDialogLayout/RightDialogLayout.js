import Button from '@Components/Button/Button';
import CloseIcon from '@mui/icons-material/Close';
import {
    styled
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
    }
})

function RightDialogLayout(props) {

    const {
        children,
        onClose,
        open,
        closeBtnText,
    } = props || {}

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
            {children}
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
                }}
            >
                {closeBtnText}
            </Button>
        </Dialog >
    );
}

export default RightDialogLayout