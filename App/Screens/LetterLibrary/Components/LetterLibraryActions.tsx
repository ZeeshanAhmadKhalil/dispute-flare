import Button from '@Components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
import { setAddFlowDialog } from '../Store/letterlibrarySlice';

function LetterLibraryAction(props: any) {

    const dispatch = useDispatch()

    const {
        selectedDocuments
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddFlowDialog(true))}
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