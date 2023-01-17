import {
    Typography,
    useTheme
} from '@mui/material';
import cls from 'classnames';
import {
    ShadowCard
} from './StyledComponents';

function Tile({
    value,
    name,
    nameColor,
}) {

    const {
        palette: {
            text: {
                xGrey3,
            },
        }
    } = useTheme()

    return (
        <ShadowCard
            className={cls(
                'flex',
                'flex-col',
                'w-[300px]',
                'mt-5',
                'p-4',
            )}
        >
            <Typography
                variant='h4'
                color={nameColor}
                sx={{
                    fontWeight: 'bold',
                }}
            >
                {value}
            </Typography>
            <Typography
                variant='h6'
                color={xGrey3}
                sx={{
                    fontWeight: '500',
                    marginTop: 1
                }}
            >
                {name}
            </Typography>
        </ShadowCard >
    )
}

export default Tile