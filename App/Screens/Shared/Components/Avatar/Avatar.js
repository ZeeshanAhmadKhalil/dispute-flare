import { Avatar as MuiAvatar } from '@mui/material';
import { useSelector } from 'react-redux';

function Avatar(props) {

    const {
        styles
    } = props

    const {
        user
    } = useSelector(state => state.auth) || {}

    return (
        <MuiAvatar
            alt={user?.name}
            src={user?.pfp}
            sx={{ ...styles }}
        />
    );
}

export default Avatar
