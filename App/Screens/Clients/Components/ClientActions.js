import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Thunder from 'public/Assets/Svgs/thunder.svg';
import { useDispatch } from 'react-redux';
import { setAddClientDialog, setImportClientsDialog } from '../Store/clientsSlice';

function ClientActions(props) {

    const dispatch = useDispatch()

    const {
        selectedClients
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setImportClientsDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                IMPORT CLIENTS
            </Button>
            <Button
                onClick={() => dispatch(setAddClientDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW CLIENT
            </Button>
            {selectedClients?.length > 0 &&
                <>
                    <Button
                        iconOnSmall={(
                            <Thunder
                                width={22}
                                height={22}
                            />
                        )}
                        color={"pink"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        DISPUTE
                    </Button>
                    <Button
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

export default ClientActions