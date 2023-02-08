import Button from '@Components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { useDispatch } from 'react-redux';
import { setAddInstructionsDialog } from '../Store/instructionsSlice';

function InstructionActions(props) {

    const dispatch = useDispatch()

    const {
        selectedInstructions
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddInstructionsDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                ADD INSTRUCTION
            </Button>
            {selectedInstructions?.length > 0 &&
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

export default InstructionActions