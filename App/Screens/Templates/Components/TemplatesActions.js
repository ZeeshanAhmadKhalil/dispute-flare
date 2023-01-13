import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Thunder from 'public/Assets/Svgs/thunder.svg';
import { useDispatch } from 'react-redux';
import { setAddLetterTemplateDialog } from '../Store/templatesSlice';

function TemplatesAction(props) {

    const dispatch = useDispatch()

    const {
        selectedDocuments
    } = props || {}

    return (
        <>
            <Button
                onClick={() => dispatch(setAddLetterTemplateDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                NEW  TEMPLATE
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

export default TemplatesAction