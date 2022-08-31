import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import Link from 'next/link';
import DownArrow from 'public/Assets/Svgs/down-arrow.svg';
import { useSelector } from 'react-redux';

function SidebarItem(props) {

    const {
        sidebar,
    } = useSelector(state => state.layout)

    const {
        hoverSidebarItem,
        path,
        icon,
        displayName,
        collapsable,
    } = props || {}

    return (
        <Link href={path}>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: (sidebar || hoverSidebarItem) ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: (sidebar || hoverSidebarItem) ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={displayName}
                        sx={{
                            opacity: (sidebar || hoverSidebarItem) ? 1 : 0
                        }}
                    />
                    {((sidebar || hoverSidebarItem) && collapsable) &&
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: sidebar ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <DownArrow
                                width={10}
                                height={10}
                            />
                        </ListItemIcon>
                    }
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default SidebarItem