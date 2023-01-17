import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Thunder from 'public/Assets/Svgs/thunder.svg';
import { useDispatch } from 'react-redux';
import { setAddReasonDialog } from '../Store/reasonsSlice';

function ReasonsAction(props) {

    const dispatch = useDispatch()

    const {
        selectedReasons
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddReasonDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                ADD REASON
            </Button>
            {selectedReasons?.length > 0 &&
                <>

                    <Button
                        iconOnSmall={<DeleteIcon />}
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

export default ReasonsAction