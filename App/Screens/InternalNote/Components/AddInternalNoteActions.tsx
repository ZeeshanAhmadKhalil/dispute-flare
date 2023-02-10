import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

function AddInternalNoteActions(props: any) {

    const {
        onClose,
        handleSubmit,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const handleAddClient = handleSubmit((data: any) => {
        console.log("data===>", data)
    })


    return (
        <>
            <Button
                onClick={handleAddClient}
                color={"primary"}
                style={{
                    borderRadius: 3,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: grey,
                    fontWeight: 'bold',
                }}
            >
                {"ADD NOTES"}
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

export default AddInternalNoteActions