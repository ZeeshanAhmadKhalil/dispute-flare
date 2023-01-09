import { Badge, Box } from '@mui/material';
import { setSelectedClientId } from '@Screens/Shared/Store/sharedSlice';
import cls from 'classnames'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

function ClientName(props) {

    const {
        clientName,
        status,
        id,
    } = props.row || {}

    const router = useRouter()
    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(setSelectedClientId(id))
        router.push('client-dashboard')
    }

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
                onClick={handleClick}
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