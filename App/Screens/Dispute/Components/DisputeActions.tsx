import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setDisputeDialog } from '../Store/disputeSlice';
import PrintIcon from '@mui/icons-material/Print';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { setPrintDialog } from '@Screens/Shared/Store/sharedSlice';

function DisputeActions(props: any) {

    const dispatch = useDispatch()

    const {
        selectedDisputes
    } = props || {}

    return (
        <>
            <Button
                match="lg"
                onClick={() => dispatch(setDisputeDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW DISPUTE
            </Button>
            {selectedDisputes.length > 1 &&
                <>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<EditIcon />}
                        color={"primary"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        UPDATE STATUS
                    </Button>
                    <Button
                        match="lg"
                        onClick={() => dispatch(setPrintDialog(true))}
                        iconOnSmall={<PrintIcon />}
                        color={"leadLight"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        PRINT ALL
                    </Button>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<DeleteIcon />}
                        color={"warning"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        DELETE ALL
                    </Button>
                </>
            }
            {selectedDisputes.length == 1 &&
                <>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<VisibilityIcon />}
                        color={"lighterPink"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        VIEW
                    </Button>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<DoneAllIcon />}
                        color={"primary"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        MARK AS SENT
                    </Button>
                    <Button
                        match="lg"
                        onClick={() => dispatch(setPrintDialog(true))}
                        iconOnSmall={<PrintIcon />}
                        color={"info"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        PRINT
                    </Button>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<EditIcon />}
                        color={"secondary"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        EDIT
                    </Button>
                    <Button
                        match="lg"
                        onClick={null}
                        iconOnSmall={<DeleteIcon />}
                        color={"warning"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        DELETE
                    </Button>
                </>
            }
        </>
    )
}

export default DisputeActions