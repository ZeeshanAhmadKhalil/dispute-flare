import {
    Box,
    Divider,
    Step as StepMui,
    StepLabel as StepLabelMui,
    Stepper as StepperMui,
    useTheme
} from '@mui/material';
import { styled } from '@mui/system';
import cls from 'classnames';
import Circle from 'public/Assets/Svgs/circle.svg';
import styles from './Stepper.module.scss';

const StepLabel = styled(StepLabelMui)(({ theme }) => {

    const {
        text: {
            secondarish1
        }
    } = theme.palette || {}

    return {
        '& .MuiStepLabel-label': {
            color: `${secondarish1} !important`,
            fontWeight: 'bold !important',
            marginTop: '5px !important',
        },
    }
})

function Stepper({
    steps,
    currentStep,
}) {

    const {
        palette: {
            tableSeparator,
            icon
        }
    } = useTheme()

    const renderSteps
        = steps.map((label, key) => (
            <StepMui
                className={cls(
                    styles.customSetp
                )}
                key={key}
            >
                <StepLabel
                    icon={
                        <Circle
                            color={
                                currentStep >= key ?
                                    icon?.blue
                                    :
                                    icon?.inactive1
                            }
                            height={25}
                            width={25}
                        />
                    }
                >
                    {label}
                </StepLabel>
            </StepMui>
        ))

    return (
        <Box
            sx={{
                width: '100%',
                border: '0px solid red',
                position: 'relative',
                overflow: 'hidden',
                p: 0,
            }}
        >
            <Divider
                className={cls(
                    styles.divider
                )}
                sx={{
                    backgroundColor: tableSeparator?.light,
                }}
            />
            <StepperMui
                className={cls(
                    styles.customStepper
                )}
                connector={null}
                activeStep={currentStep}
                alternativeLabel
            >
                {renderSteps}
            </StepperMui>
        </Box>
    );
}

export default Stepper