import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
import {
    setCreditorDialog,
    setImportCreditorsDialog
} from '../Store/creditorSlice';

function CreditorActions(props: any) {

    const dispatch = useDispatch()

    const {
        selectedCreditors
    } = props || {}

    return (
        <>
            <Button
                match="lg"
                onClick={() => dispatch(setImportCreditorsDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                IMPORT CREDITOR
            </Button>
            <Button
                match="lg"
                onClick={() => dispatch(setCreditorDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"lightPink"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW CREDITOR
            </Button>
            {selectedCreditors.length > 1 &&
                <>
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
            {selectedCreditors.length == 1 &&
                <>
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

export default CreditorActions