import { Avatar as MuiAvatar } from '@mui/material';
import { useSelector } from 'react-redux';

function Avatar({
    styles,
    pfp,
}) {

    const {
        user
    } = useSelector(state => state.auth) || {}

    return (
        <MuiAvatar
            alt={user?.name}
            src={pfp ?
                pfp
                :
                user?.pfp
            }
            sx={{ ...styles }}
        />
    );
}

export default Avatar
