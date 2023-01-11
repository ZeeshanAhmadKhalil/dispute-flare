import Button from '@Components/Button/Button';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

function AddDisputeActions(props) {

    const {
        onClose,
        handleSubmit,
        currentStep,
        setCurrentStep,
        totalSteps,
    } = props || {}

    const dispatch = useDispatch()
    const {
        palette: {
            text: { grey }
        }
    } = useTheme()

    const handleAddClient = handleSubmit((data) => {
        console.log("data===>", data)
    })

    const handleNext = () => {

        setCurrentStep(prev => {
            if (prev == totalSteps)
                return prev
            return prev + 1
        })
    }

    const handlePrev = () => {

        setCurrentStep(prev => {
            if (prev == 0)
                return prev
            return prev - 1
        })
    }


    return (
        <>
            {currentStep == totalSteps ?
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
                    CREATE DISPUTE
                </Button>
                :
                <Button
                    onClick={handleNext}
                    color={"primary"}
                    style={{
                        borderRadius: 3,
                        paddingLeft: 20,
                        paddingRight: 20,
                        color: grey,
                        fontWeight: 'bold',
                    }}
                >
                    NEXT
                </Button>
            }
            {currentStep == 0 ?
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
                    CLOSE
                </Button>
                :
                <Button
                    color={"text"}
                    onClick={handlePrev}
                    disableElevation
                    style={{
                        color: grey,
                        fontWeight: 'bold',
                        marginLeft: 10,
                    }}
                >
                    PREVIOUS
                </Button>

            }
        </>
    )
}

export default AddDisputeActions