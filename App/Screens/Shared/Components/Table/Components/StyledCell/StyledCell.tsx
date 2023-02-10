import { Typography } from '@mui/material';

function StyledCell({
    value,
    styles,
}: any) {

    return (
        <Typography
            variant='body2'
            sx={styles}
        >
            {value}
        </Typography>
    )
}

export default StyledCell