import { Typography, useTheme } from '@mui/material';

function LinkCell({
    value,
}) {

    const {
        palette: {
            text: {
                link,
            }
        }
    } = useTheme()

    return (
        <Typography
            variant='body2'
            sx={{
                color: link,
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }
            }}
        >
            {value}
        </Typography>
    )
}

export default LinkCell