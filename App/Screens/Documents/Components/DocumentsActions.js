import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
// import { setAddClientDialog, setImportClientsDialog } from '../Store/clientsSlice';

function DocumentsActions(props) {

    const dispatch = useDispatch()

    const {
        selectedDocuments
    } = props || {}

    return (
        <>
            <Button
                //   onClick={() => dispatch(setImportClientsDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW DOCUMENT
            </Button>
            {selectedDocuments?.length > 0 &&
                <>

                    <Button
                        //    onClick={() => dispatch(setAddClientDialog(true))}
                        iconOnSmall={<AddIcon />}
                        color={"lightPink"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        DOWNLOAD ALL
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
                        DELETE ALL
                    </Button>
                </>
            }





        </>
    )
}

export default DocumentsActions