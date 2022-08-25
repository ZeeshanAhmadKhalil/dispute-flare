import DeleteIcon from '@mui/icons-material/Delete';
import { Button as MuiButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import cls from 'classnames';
import styles from './Buttom.module.scss'

function Button(props) {

    const {
        startIcon,
        endIcon,
        color,
        style,
        variant = "contained",
        children,
    } = props || {}

    return (
        <Stack direction="row" spacing={2}>
            <MuiButton
                className={cls(styles.customButton)}
                color={color}
                variant={variant}
                startIcon={startIcon}
                endIcon={endIcon}
                style={{ ...style }}
                disableRipple
            >
                {children}
            </MuiButton>
        </Stack>
    );
}

export default Button
