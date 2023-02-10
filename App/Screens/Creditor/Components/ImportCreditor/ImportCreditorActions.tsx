import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

function ImportCreditorActions(props: any) {

    const {
        onClose,
        handleSubmit,
    } = props || {}

    const {
        palette: {
            text: { grey }
        }
    }: any = useTheme()

    const handleSave = handleSubmit((data: any) => {
        console.log("data===>", data)
    })


    return (
        <>
            <Button
                onClick={handleSave}
                color={"primary"}
                style={{
                    borderRadius: 3,
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: grey,
                    fontWeight: 'bold',
                }}
            >
                {"SAVE"}
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

export default ImportCreditorActions