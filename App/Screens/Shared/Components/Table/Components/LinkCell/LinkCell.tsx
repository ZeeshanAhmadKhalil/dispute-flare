import { Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

function LinkCell({
    value,
    navigateTo = null,
}: any) {

    const {
        palette: {
            text: {
                link,
            }
        }
    }: any = useTheme()

    const router = useRouter()

    const handleClick = () => {

        if (navigateTo)
            router.push(navigateTo)
    }

    return (
        <Typography
            onClick={handleClick}
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