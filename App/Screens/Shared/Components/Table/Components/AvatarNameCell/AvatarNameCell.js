import { Avatar, Box } from '@mui/material';

function AvatarNameCell(props) {

    const {
        row: {
            pfp,
            pfp1,
        },
        value,
        isSecond,
    } = props || {}

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Avatar
                src={isSecond ?
                    pfp
                    :
                    pfp1
                }
                sx={{
                    width: 24,
                    height: 24,
                    mr: 1,
                }}
            />
            <span>{value}</span>
        </Box>
    )
}

export default AvatarNameCell