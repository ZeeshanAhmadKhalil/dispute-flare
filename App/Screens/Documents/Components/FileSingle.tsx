import { clipPath } from '@Config/constants';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import FileIcon from 'public/Assets/Svgs/file.svg';
import Sendicon from 'public/Assets/Svgs/sendicon.svg';
import * as React from 'react';


const Container = styled(Box)(({
    width,
    height,
    uploading = null,
}: any) => {
    return {
        clipPath,
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
        marginTop: "1rem",
        alignItems: "center",
        // backgroundColor: "red"
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

const MenuIconCustom = styled(MenuIcon)(({
    theme: {
        palette: {
            iconblue
        }
    }
}: any) => {
    return {
        color: iconblue.input,
        marginLeft: "16px",
        marginTop: "-2rem"
    }
})



function FileSingle(props: any) {

    const { actions, title, width, height, dropdown, uploading } = props || {};
    const {
        palette: {
            text
        }
    }: any = useTheme()

    const [open, setOpen] = React.useState(false);
    const anchorRef: any = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (
            anchorRef.current
            && anchorRef.current.contains(event.target)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: any) {
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
        <Container
            {...{
                width,
                height,
                uploading,
            }}
        >
            {dropdown && <Box sx={{ width: "100%" }}>

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
                                                sx={{ backgroundColor: "white", color: text.xxGrey }}
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
                    <AddCircleIcon color="secondary" sx={{
                        width: "41px",
                        height: "41px",
                        margin: "0px"
                    }} />
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


