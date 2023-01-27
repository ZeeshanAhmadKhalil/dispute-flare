import {
    Box, Typography,
} from '@mui/material'
import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

import {
    styled, useTheme, theme
} from '@mui/material'
import FileIcon from 'public/Assets/Svgs/file.svg'
import Sendicon from 'public/Assets/Svgs/sendicon.svg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';


const Container = styled(Box)(({ theme, width, height, dropdown, uploading }) => {
    return {
        clipPath: "polygon( 0 0, calc(100% - 40px) 0, 100% 40px, 100% calc(100% - 20px), calc(100% - 00px) 100%, 20px 100%, 0 calc(100% - 0px), 0 20px)",
        display: "flex",
        width: width,
        height: height,
        marginBottom: '1em',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "0px",
        opacity: uploading ? "0.5" : "1",
        borderRadius: "1rem"
    }
})

const ActionsWrapper = styled(Box)(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "row",
        gap: "7px",
        marginTop: "1rem"
    }
})
const TitleWrapper = styled(Box)(({ theme }) => {
    return {
        marginTop: "15px",
        width: "100%",
        paddingLeft: "0rem",
        alignItems: "center",
        display: "flex",
        //  opacity: "0.5",
        flexDirection: "row",

    }
})

const MenuIconCustom = styled(MenuIcon)(({ theme }) => {
    return {
        color: theme.palette.iconblue.input,
        marginLeft: "16px",
        marginTop: "-2rem"
    }
})



function FileSingle(props) {

    const { actions, title, width, height, dropdown, uploading } = props || {};
    const {
        palette
    } = useTheme()

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <Container width={width} height={height} dropdown uploading={uploading}>
            {
                dropdown && <Box sx={{ width: "100%" }}>

                    <MenuIconCustom onClick={handleToggle} ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true" />
                    <Stack direction="row" spacing={2}>

                        <div>

                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onKeyDown={handleListKeyDown}
                                                    sx={{ backgroundColor: "white", color: palette.text.xxGrey }}
                                                >
                                                    <MenuItem onClick={handleClose}>View</MenuItem>
                                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                    <MenuItem onClick={handleClose}>Download</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Stack>


                </Box>
            }
            <FileIcon width={53} height={73} />

            {
                actions && <ActionsWrapper>
                    <AddCircleIcon color="secondary" sx={{ width: "42px", height: "42px", margin: "0px" }} />
                    <Sendicon width="35px" height="35px" />
                </ActionsWrapper>
            }

            <TitleWrapper
                sx={{
                    justifyContent: dropdown ? "flex-start" : "center",
                    paddingLeft: dropdown ? "16px" : "0px"
                }}>
                <Typography
                    color="text.xxxGrey"
                    textAlign="left">

                    {title}
                </Typography>
            </TitleWrapper>
        </Container>
    )
}

export default FileSingle


