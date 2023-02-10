import { Avatar as MuiAvatar } from '@mui/material';
import { useSelector } from 'react-redux';

function Avatar({
    styles,
    pfp = null,
}: any) {

    const {
        user
    } = useSelector((state: any) => state.auth) || {}

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
