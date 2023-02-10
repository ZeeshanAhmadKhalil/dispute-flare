import { Box } from '@mui/material';

function Title(props: any) {

    const {
        title,
    } = props.row || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >

            <span>{title}</span>
        </Box>
    )
}

export default Title