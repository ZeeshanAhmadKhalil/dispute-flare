import Button from '@Components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { setStandardRateDialog } from '../Store/commissionSlice';

function CommissionActions(props: any) {

    const dispatch = useDispatch()

    const {
        selectedComission
    } = props || {}

    return (
        <>
            <Button
                match="lg"
                onClick={() => dispatch(setStandardRateDialog(true))}
                iconOnSmall={<AddIcon />}
                color={"secondaryOff"}
                startIcon={null}
                style={{
                    borderRadius: 3,
                    marginRight: 10
                }}
            >
                UPDATE STANDARD RATE
            </Button>
            {selectedComission.length > 1 &&
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
            {selectedComission.length == 1 &&
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
                        iconOnSmall={<VisibilityIcon />}
                        color={"pink"}
                        startIcon={null}
                        style={{
                            borderRadius: 3,
                            marginRight: 10
                        }}
                    >
                        VIEW DASHBOARD
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

export default CommissionActions