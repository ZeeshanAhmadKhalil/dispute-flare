import {
    Box,
    useTheme
} from '@mui/material'
import styles from './Tag.module.scss'

function Tag({
    color,
    name,
    onClick,
}) {

    const {
        palette
    } = useTheme()


    return (
        <Box
            onClick={onClick}
            className={styles.tag}
            sx={{
                backgroundColor: color,
                '&:after': {
                    backgroundColor: color,
                }
            }}
        >
            <Box
                className={styles.text}
                sx={{
                    backgroundColor: color,
                }}
            >
                {name}
            </Box>
        </Box>
    )
}

export default Tag