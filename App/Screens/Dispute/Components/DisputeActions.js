import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setDisputeDialog } from '../Store/disputeSlice';
import PrintIcon from '@mui/icons-material/Print';

function DisputeActions(props) {

    const dispatch = useDispatch()

    const {
        selectedClients
    } = props || {}

    return (
        <>
            <Button
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
            <Button
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
                onClick={null}
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
    )
}

export default DisputeActions