import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
import { setAddTeamDialog } from '../Store/teamsSlice';

function TeamAction(props: any) {

    const dispatch = useDispatch()

    const {
        selectedDocuments
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddTeamDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW  TEAM
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

export default TeamAction