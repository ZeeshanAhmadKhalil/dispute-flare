import { lightTheme } from '@Config/theme';
import { ThemeProvider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Controller } from 'react-hook-form';

function RadioBtns(props) {

    const {
        control,
        name,
        error,
        list,
    } = props || {}

    function RenderList() {
        return list?.map?.((item, key) => {

            const { label, value } = item

            return (
                <FormControlLabel
                    key={key}
                    value={value}
                    control={<Radio />}
                    label={label}
                />
            )
        })
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <RadioGroup
                        onChange={(event) => onChange(event.target.value)}
                        value={value}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        {RenderList()}
                    </RadioGroup>
                )}
            />
        </ThemeProvider>
    );
}

export default RadioBtns