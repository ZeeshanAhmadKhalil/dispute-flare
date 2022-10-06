import { camelToBreadcrumbs, camelToTitle } from '@Config/helper';
import { lightTheme } from '@Config/theme';
import { ThemeProvider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Controller } from 'react-hook-form';

function CheckBoxes(props) {

    const {
        control,
        name,
        error,
        list,
    } = props || {}

    function RenderList(value, onChange) {
        return list?.map?.((item, key) => {

            const {
                label,
                value: itemValue,
            } = item

            return (
                <FormControlLabel
                    key={key}
                    control={
                        <Checkbox
                            checked={value?.includes?.(itemValue)}
                            onChange={() => {

                                if (value?.includes?.(itemValue))
                                    onChange(value.filter(item => item == itemValue))
                                else
                                    onChange([
                                        ...value,
                                        itemValue,
                                    ])
                            }}
                            name={camelToBreadcrumbs(label)}
                        />
                    }
                    label={camelToTitle(label)}
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
                    <FormControl
                        component="fieldset"
                        variant="standard"
                    >
                        <FormGroup
                            sx={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            {RenderList(value, onChange)}
                        </FormGroup>
                    </FormControl>
                )}
            />
        </ThemeProvider>
    )
}

export default CheckBoxes