import Button from '@Components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch } from 'react-redux';
import { setRecordPaymentDialog } from '../Store/affiliateDashboardSlice';
function AffiliateDashboardActions(props: any) {

    const dispatch = useDispatch()


    const {
        selectedInstructions
    } = props || {}

    return (
        <>
            <Button
                iconOnSmall={<FileUploadIcon />}
                color={"primary"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                UPDATE COMMISSION RATE
            </Button>
            <Button
                onClick={() => dispatch(setRecordPaymentDialog(true))}
                iconOnSmall={<FileUploadIcon />}
                color={"warning"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                RECORD A PAYMENT
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

export default AffiliateDashboardActions