import { Badge, Box } from '@mui/material';
import cls from 'classnames'
import { useRouter } from 'next/router';

function ClientName(props) {

    const {
        clientName,
        status,
    } = props.row || {}

    const router = useRouter()

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Badge
                color={status.toLowerCase()}
                variant="dot"
                sx={{
                    mr: 1,
                }}
            />
            <span
                onClick={() => router.push('client-dashboard')}
                className={cls(
                    'hover:underline',
                    'cursor-pointer',
                )}
            >
                {clientName}
            </span>
        </Box>
    )
}

export default ClientName