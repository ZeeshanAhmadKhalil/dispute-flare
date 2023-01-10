import useWidth from '@Hooks/useWidth';
import { Button as MuiButton, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import cls from 'classnames';
import styles from './Buttom.module.scss';

function Button(props) {


    const {
        startIcon,
        endIcon,
        color,
        style,
        variant = "contained",
        children,
        iconOnSmall,
        disableElevation,
        onClick,
        match = "md1",
    } = props || {}

    const matches = useWidth(`${match} <`)
    console.log("imawidth", matches)

    return (
        <Stack direction="row" spacing={2}>
            {(iconOnSmall && matches) ?
                <IconButton
                    onClick={onClick}
                    disableElevation={disableElevation}
                    className={cls(
                        ...styles.customButton,
                    )}
                    color={`text`}
                    variant={variant}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    style={{ ...style, }}
                    sx={{
                        "&:hover": {
                            backgroundColor: `${color}.hovered`,
                        },
                        backgroundColor: `${color}.main`,
                        textTransform: `none`,
                    }}
                >
                    {(iconOnSmall && matches) ? iconOnSmall : children}
                </IconButton>
                :
                <MuiButton
                    onClick={onClick}
                    disableElevation={disableElevation}
                    className={cls(
                        ...styles.customButton,
                    )}
                    color={color}
                    variant={variant}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    style={{ ...style, }}
                    sx={{
                        "&:hover": {
                            backgroundColor: `${color}.hovered`,
                        },
                        textTransform: `none`
                    }}
                >
                    {(iconOnSmall && matches) ?
                        iconOnSmall
                        :
                        children
                    }
                </MuiButton>
            }
        </Stack>
    );
}

export default Button
