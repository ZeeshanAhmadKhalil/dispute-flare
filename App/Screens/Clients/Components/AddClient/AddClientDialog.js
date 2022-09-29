import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { setAddClientDialog } from '@Screens/Clients/Store/clientsSlice';
import { forwardRef } from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

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
                fontWeight: '500',
                color: text.grey,
            }}
            {...other}
        >
            {children}
        </DialogTitle>
    );
};

function AddClientDialog(props) {

    const dispatch = useDispatch()
    const {
        palette: {
            tableSeparator,
            text,
            checkbox,
        }
    } = useTheme()

    const {
    } = useSelector(state => state.shared)
    const {
        addClientDialog
    } = useSelector(state => state.clients)

    return (
        <RightDialogLayout
            onClose={() => dispatch(setAddClientDialog(false))}
            open={addClientDialog}
            closeBtnText="CLIENT"
        >
            <Title
                id="customized-dialog-title"
                onClose={null}
            >
                {`Add Client`}
            </Title>
            <DialogContent
                sx={{
                }}
            >

            </DialogContent >
        </RightDialogLayout >
    );
}

export default AddClientDialog