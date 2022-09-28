import Avatar from '@Components/Avatar/Avatar';
import Button from '@Components/Button/Button';
import { setThemesDialog } from '@Layouts/Store/layoutSlice';
import {
    DialogContent,
    styled,
    Typography, useTheme
} from '@mui/material';
import Box from '@mui/material/Box';
import MuiDialog from '@mui/material/Dialog';
import { setProfileDialog } from '@Screens/Shared/Store/sharedSlice';
import cls from 'classnames';
import BellGray from 'public/Assets/Svgs/bell-gray.svg';
import CloudScape from 'public/Assets/Svgs/cloud-scape.svg';
import Following from 'public/Assets/Svgs/following.svg';
import Letters from 'public/Assets/Svgs/letters.svg';
import Loader from 'public/Assets/Svgs/loader.svg';
import LoginHistory from 'public/Assets/Svgs/login-history.svg';
import Logout from 'public/Assets/Svgs/logout.svg';
import MyDisputeNetwork from 'public/Assets/Svgs/my-dispute-network.svg';
import New from 'public/Assets/Svgs/new.svg';
import RectangleRightArrow from 'public/Assets/Svgs/rectangle-right-arrow.svg';
import Tasks from 'public/Assets/Svgs/tasks.svg';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProfileDialog.module.scss';

const Dialog = styled(MuiDialog)(({ theme }) => {

    const {
        text,
        dialog,
    } = theme.palette

    return {
        '& .MuiPaper-root': {
            backgroundColor: dialog.off,
            color: text.contrastText,
            borderRadius: 20,
        },
        '& .MuiDialogContent-root': {
            padding: 15,
        },
        '& .MuiDialog-container': {
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingTop: 30,
            paddingRight: 380,
        },
    }
})

const StyledBox = styled(Box)(({ theme }) => {
    const {
        shadow
    } = theme.palette

    return {
        borderRadius: 10,
        padding: 10,
        boxShadow: `0px 2px 7px -3px ${shadow.main}`,
        marginBottom: 15,
    }

})

function ProfileDialog(props) {

    const dispatch = useDispatch()
    const {
        palette: {
            borders: {
                secondary,
            },
            shadow: {
                main: mainShadow,
            },
            dialog: {
                main: mainDialog,
                xxOff,
            },
            text: {
                xGrey,
            },
            active: {
                main: mainActive
            },
            cancelled: {
                main: mainCancelled
            },
        }
    } = useTheme()

    const {
        profileDialog
    } = useSelector(state => state.shared)
    const {
        themes,
        sidebar,
        selectedTheme,
    } = useSelector(state => state.layout)

    let selectedImagePath
        = themes
            .find(obj => obj.id == selectedTheme)
            ?.imagePath

    return (
        <Dialog
            onClose={() => dispatch(setProfileDialog(false))}
            open={profileDialog}
            fullWidth={true}
            maxWidth="xs"
            hideBackdrop
        >
            <DialogContent
                sx={{
                }}
            >
                <StyledBox
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.main",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            styles={{
                                height: 35,
                                width: 35,
                            }}
                        />
                        <Box
                            sx={{
                                ml: 1,
                            }}
                        >
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >
                                D Luffy
                            </Typography>
                            <Typography
                                color="text.lighter"
                                variant="caption"
                                component="div"
                            >
                                Administrator
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            color={"textOff"}
                            variant="text"
                            style={{
                                height: 25,
                                width: 80,
                                borderRadius: 50,
                                border: `1px solid ${secondary}`,
                            }}
                        >
                            {"Profile"}
                        </Button>
                    </Box>
                </StyledBox>
                <StyledBox
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.xOff",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <MyDisputeNetwork
                            height={25}
                            width={25}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                ml: 1,
                            }}
                        >
                            My DisputeFlare Network page
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            color={"textOff"}
                            variant="text"
                            style={{
                                height: 25,
                                width: 40,
                                borderRadius: 50,
                                boxShadow: `0px 2px 7px -3px ${mainShadow}`,
                                backgroundColor: mainDialog,
                            }}
                        >
                            {"View"}
                        </Button>
                    </Box>
                </StyledBox>
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <StyledBox
                        sx={{
                            flex: 1,
                            mr: 1,
                            background: `url('${selectedImagePath}')`,
                            backgroundSize: 'cover',
                        }}
                        className={cls(
                            `bg-cover`,
                            `items-center`,
                            `flex`,
                            `flex-col`,
                        )}
                    >
                        <Box
                            className={cls(
                                `border-red-700`,
                                `border-0`,
                                `items-center`,
                                `flex`,
                                `w-full`,
                                `mb-3`,
                                `mt-2`,
                            )}
                        >
                            <CloudScape
                                height={25}
                                width={25}
                            />
                            <Typography
                                color="text.main"
                                variant="body2"
                                component="div"
                                sx={{
                                    ml: 1,
                                }}
                            >
                                Cloudscape view
                            </Typography>
                        </Box>
                        <Button
                            onClick={() => {
                                dispatch(setThemesDialog(true))
                                dispatch(setProfileDialog(false))
                            }}
                            color={"textOff"}
                            variant="text"
                            style={{
                                height: 25,
                                width: 80,
                                borderRadius: 50,
                                boxShadow: `0px 2px 7px -3px ${mainShadow}`,
                                backgroundColor: mainDialog,
                            }}
                        >
                            {"Change"}
                        </Button>
                    </StyledBox>
                    <StyledBox
                        sx={{
                            flex: 1,
                            ml: 1,
                            display: 'flex',
                            backgroundColor: "dialog.main",
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box
                            className={cls(
                                `items-center`,
                                `flex`,
                            )}
                        >
                            <BellGray
                                height={25}
                                width={25}
                            />
                            <Typography
                                color="text.xGrey"
                                variant="body2"
                                component="div"
                                sx={{
                                    ml: 1,
                                }}
                            >
                                Notifications
                            </Typography>
                        </Box>
                        <Button
                            color={"link"}
                            variant="text"
                            style={{
                                height: 25,
                            }}

                        >
                            <Typography
                                variant='body2'
                                className={cls(
                                    `underline`,
                                )}
                            >
                                {"See all"}
                            </Typography>
                        </Button>
                    </StyledBox>
                </Box>
                <StyledBox
                    sx={{
                        backgroundColor: "dialog.main",
                    }}
                    className={cls(
                        `flex`,
                        `h-[150px]`,
                    )}
                >
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            ml: 1,
                        }}
                    >
                        Analytics
                    </Typography>
                </StyledBox>
                <Box
                    className={cls(
                        `flex`,
                        `border-red-700`,
                        `border-0`,
                    )}
                >
                    <StyledBox
                        sx={{
                            backgroundColor: "dialog.main",
                            mr: 1,
                        }}
                        className={cls(
                            `flex`,
                            `flex-col`,
                            `flex-1`,
                        )}
                    >
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                ml: 1,
                            }}
                        >
                            Clients
                        </Typography>
                        <Box
                            className={cls(
                                'mt-2',
                                'mx-2',
                                'p-2',
                                'rounded-md',
                            )}
                            sx={{
                                bgcolor: xxOff
                            }}
                        >
                            <div
                                className={cls(
                                    'relative',
                                    `h-[65px]`,
                                    `w-[65px]`,
                                    `rounded-full`,
                                    `border-red-700`,
                                    `border-0`,
                                    'm-auto',
                                    'flex',
                                    'flex-col',
                                    'justify-center',
                                    'items-center',
                                    'cursor-pointer',
                                )}
                                style={{
                                    backgroundColor: mainDialog,
                                }}
                            >
                                <Loader
                                    height={65}
                                    width={65}
                                    className={cls(
                                        `absolute`,
                                    )}
                                />
                                <Typography
                                    variant="button"
                                    component="div"
                                    sx={{
                                        fontWeight: 'bold'
                                    }}
                                    className={cls(
                                        styles.compactText
                                    )}
                                >
                                    300
                                </Typography>
                                <Typography
                                    variant="caption"
                                    component="div"
                                    className={cls(
                                        styles.compactText
                                    )}
                                >
                                    Clients
                                </Typography>
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                            >
                                <New
                                    height={20}
                                    width={20}
                                />
                                <Typography
                                    variant="caption"
                                    component="div"
                                    sx={{
                                        ml: 1,
                                    }}
                                >
                                    New
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mt: 1,
                                }}
                            >
                                <Following
                                    height={20}
                                    width={20}
                                />
                                <Typography
                                    variant="caption"
                                    component="div"
                                    sx={{
                                        ml: 1,
                                    }}
                                >
                                    Following
                                </Typography>
                            </Box>
                        </Box>
                    </StyledBox>
                    <Box
                        sx={{
                            ml: 1,
                            flex: 1.5,
                        }}
                        className={cls(
                            `flex`,
                            `flex-col`,
                            `border-red-700`,
                            `border-0`,
                        )}
                    >
                        <StyledBox
                            sx={{
                                backgroundColor: "dialog.main",
                            }}
                            className={cls(
                                'cursor-pointer',
                                `flex`,
                                `flex-1`,
                                `border-red-700`,
                                `border-0`,
                            )}
                        >
                            <Box
                                sx={{
                                    alignItems: 'center',
                                }}
                                className={cls(
                                    'flex',
                                    `flex-1`,
                                    `border-red-700`,
                                    `border-0`,
                                    'mx-[15px]',
                                )}
                            >
                                <div
                                    className={cls(
                                        `h-full`,
                                        `mt-[12px]`,
                                        `border-red-700`,
                                        `border-0`,
                                    )}
                                >
                                    <Letters
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        color={xGrey}
                                        variant="body2"
                                        component="div"
                                        sx={{
                                            ml: 1,
                                        }}
                                    >
                                        Letters
                                    </Typography>
                                    <Typography
                                        color={mainActive}
                                        variant="subtitle1"
                                        component="div"
                                        sx={{
                                            ml: 1,
                                            fontWeight: '600'
                                        }}
                                    >
                                        300
                                    </Typography>
                                </div>
                                <div
                                    className={cls(
                                        'flex',
                                        'flex-1',
                                        'mb-[25px]',
                                        'h-full',
                                        'justify-end',
                                        'items-end',
                                        `border-red-700`,
                                        `border-0`,
                                    )}
                                >
                                    <RectangleRightArrow
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            </Box>
                        </StyledBox>
                        <StyledBox
                            sx={{
                                backgroundColor: "dialog.main",
                            }}
                            className={cls(
                                'cursor-pointer',
                                `flex`,
                                `flex-1`,
                                `border-red-700`,
                                `border-0`,
                            )}
                        >
                            <Box
                                sx={{
                                    alignItems: 'center',
                                }}
                                className={cls(
                                    'flex',
                                    `flex-1`,
                                    `border-red-700`,
                                    `border-0`,
                                    'mx-[15px]',
                                )}
                            >
                                <div
                                    className={cls(
                                        `h-full`,
                                        `mt-[12px]`,
                                        `border-red-700`,
                                        `border-0`,
                                    )}
                                >
                                    <Tasks
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        color={xGrey}
                                        variant="body2"
                                        component="div"
                                        sx={{
                                            ml: 1,
                                        }}
                                    >
                                        Tasks
                                    </Typography>
                                    <Typography
                                        color={mainCancelled}
                                        variant="subtitle1"
                                        component="div"
                                        sx={{
                                            ml: 1,
                                            fontWeight: '600'
                                        }}
                                    >
                                        69
                                    </Typography>
                                </div>
                                <div
                                    className={cls(
                                        'flex',
                                        'flex-1',
                                        'mb-[25px]',
                                        'h-full',
                                        'justify-end',
                                        'items-end',
                                        `border-red-700`,
                                        `border-0`,
                                    )}
                                >
                                    <RectangleRightArrow
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            </Box>
                        </StyledBox>
                    </Box>
                </Box>
                <StyledBox
                    className={cls(
                        'cursor-pointer',
                    )}
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.xOff",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <LoginHistory
                            height={25}
                            width={25}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                ml: 1,
                            }}
                        >
                            Login History
                        </Typography>
                    </Box>
                </StyledBox>
                <StyledBox
                    className={cls(
                        'cursor-pointer',
                    )}
                    sx={{
                        display: 'flex',
                        backgroundColor: "dialog.xOff",
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Logout
                            height={25}
                            width={25}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                ml: 1,
                            }}
                        >
                            Logout
                        </Typography>
                    </Box>
                </StyledBox>
            </DialogContent >
        </Dialog >
    );
}

export default ProfileDialog