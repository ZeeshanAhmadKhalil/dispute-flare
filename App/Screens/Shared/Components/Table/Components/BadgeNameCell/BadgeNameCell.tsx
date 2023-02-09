import {
    Badge,
    Box
} from '@mui/material';
import { setSelectedClientId } from '@Screens/Shared/Store/sharedSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

function BadgeNameCell(props: any) {

    const {
        row: {
            status,
            id,
        },
        value,
        navigateTo,
    } = props || {}

    const router = useRouter()
    const dispatch = useDispatch()

    const handleClick = () => {

        if (navigateTo) {
            dispatch(setSelectedClientId(id))
            router.push(navigateTo)
        }
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer',
                }
            }}
        >
            <Badge
                color={status.toLowerCase()}
                variant="dot"
                sx={{
                    mr: 1,
                }}
            />
            <span>
                {value}
            </span>
        </Box>
    )
}

export default BadgeNameCell