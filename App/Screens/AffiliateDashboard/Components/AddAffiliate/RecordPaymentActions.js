import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

function AddAffiliateActions(props) {

    const {
        onClose,
        handleSubmit,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            text: { grey }
        }
    } = useTheme()

    const handleFlowClient = handleSubmit((data) => {
    })


    return (
        <>
            <Button
                onClick={handleFlowClient}
                color={"primary"}
                style={{
                    borderRadius: 3,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: grey,
                    fontWeight: 'bold',
                }}
            >
                {"RECORD PAYMENT"}
            </Button>
            <Button
                color={"text"}
                onClick={onClose}
                disableElevation
                style={{
                    color: grey,
                    fontWeight: 'bold',
                    marginLeft: 10,
                }}
            >
                CANCEL
            </Button>
        </>
    )
}

export default AddAffiliateActions