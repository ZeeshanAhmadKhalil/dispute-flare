import { Avatar as MuiAvatar } from '@mui/material';
import { useSelector } from 'react-redux';

function Avatar(props) {

    const {
        styles
    } = props

    const {
        user: {
            name = "",
            pfp = null,
        }
    } = useSelector(state => state.auth)

    return (
        <MuiAvatar
            alt={name}
            src={pfp}
            sx={{ ...styles }}
        />
    );
}

export default Avatar
