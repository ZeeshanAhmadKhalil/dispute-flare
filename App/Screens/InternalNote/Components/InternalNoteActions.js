import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setAddInternalNoteDialog } from '../Store/internalNoteSlice';

function InternalNoteActions(props) {

    const dispatch = useDispatch()

    const {
        selectedNotes
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddInternalNoteDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW NOTES
            </Button>
            {selectedNotes.length > 1 &&
                <>
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
            }
            {selectedNotes.length == 1 &&
                <>
                    <Button
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

export default InternalNoteActions