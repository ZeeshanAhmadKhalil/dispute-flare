import {
    useMediaQuery,
    useTheme
} from "@mui/material";

const useWidth = (props: any) => {

    const [size, condition] = props.split(' ')

    const theme = useTheme();
    let matches
    if (condition == '>')
        matches = useMediaQuery(theme.breakpoints.up(size))
    else
        matches = useMediaQuery(theme.breakpoints.down(size))

    return matches;
};

export default useWidth