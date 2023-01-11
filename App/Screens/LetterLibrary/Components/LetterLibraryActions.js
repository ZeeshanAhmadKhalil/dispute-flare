import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Thunder from 'public/Assets/Svgs/thunder.svg';
import { useDispatch } from 'react-redux';
// import { setAddClientDialog, setImportClientsDialog } from '../Store/clientsSlice';

function LetterLibraryAction(props) {

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
                NEW  FLOW
            </Button>
            {selectedDocuments?.length > 0 &&
                <>



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

export default LetterLibraryAction