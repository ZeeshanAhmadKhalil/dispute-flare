import { lightTheme } from '@Config/theme';
import { ThemeProvider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function RadioBtns(props) {

    const {
        register,
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
            <FormControl>
                <RadioGroup
                    {...register}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {RenderList()}
                </RadioGroup>
            </FormControl>
        </ThemeProvider>
    );
}

export default RadioBtns