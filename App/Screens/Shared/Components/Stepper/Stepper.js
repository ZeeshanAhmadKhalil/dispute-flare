import * as React from 'react';
import Box from '@mui/material/Box';
import {
    Stepper as StepperMui
} from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function Stepper({
    steps
}) {

    const renderSteps
        = steps.map((label) => (
            <Step key={label}>
                {console.log("label===>", label)}
                <StepLabel>
                    {label}
                </StepLabel>
            </Step>
        ))

    return (
        <Box
            sx={{
                width: '100%',
                border: '1px solid red'
            }}
        >
            <StepperMui
                activeStep={1}
                alternativeLabel
            >
                {renderSteps}
            </StepperMui>
        </Box>
    );
}

export default Stepper