import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';

function AddFlowActions(props: any) {

    const {
        onClose,
        handleSubmit,
    } = props || {}

    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const handleFlowClient = handleSubmit((data: any) => {
        console.log("data===>", data)
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
                {"ADD FLOW"}
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

export default AddFlowActions