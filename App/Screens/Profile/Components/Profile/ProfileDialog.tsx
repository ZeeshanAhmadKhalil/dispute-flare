import RightDialogLayout from '@Layouts/RightDialogLayout/RightDialogLayout';
import {
    Box,
    Divider,
    Grid,
    styled,
    Typography,
    useTheme
} from '@mui/material';
import React from 'react';
import StarsIcon from '@mui/icons-material/Stars';
import RecommendIcon from '@mui/icons-material/Recommend';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CircleIcon from '@mui/icons-material/Circle';
import Tabs from '@mui/material/Tabs';
import HorzontalTag from 'public/Assets/Svgs/horizontal-tag.svg'
import Tab from '@mui/material/Tab';
import { setProfileDialogMain } from '@Screens/Profile/Store/profileSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { useForm } from 'react-hook-form';
import Avatar from '@Components/Avatar/Avatar';
const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    }: any = theme.palette || {}

    return {
        //   backgroundColor: "pink",
        padding: 20,
        marginTop: 10,
        opacity: "1",
        backgroundImage: 'url("/public/Assets/Images/default.jpeg")'


    }
})
function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function ProfileDialog() {

    const defaultValues = {
        firstName: null,
        lastName: null,
        ssnNumber: null,
        emailId: null,
        mobileNo: null,
        phoneNo: null,
        website: null,
        address: null,
        city: null,
        state: null,
        country: null,
        zipCode: null,
        hasPreviousAddress: null,
        previousAddress: null,
        previousCity: null,
        previousState: null,
        previousCountry: null,
        previousZipCode: null,
        provider: null,
        username: null,
        password: null,
        ssn: null,
        hasAttachmentAgreement: null,
        attachmentAgreement: null,
        requiredDocuments: [],
        otherRequiredDocument: null
    }

    const dispatch = useDispatch()
    const {
        palette: {
            text,
            secondary,
        }
    }: any = useTheme()
    const {
        profileDialogMain
    } = useSelector((state: any) => state.profile)

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const tabs = [
        { label: "General", value: "general" },
        { label: "Clients", value: "clients" },
        { label: "Tasks", value: "tasks" },
        { label: "Calender", value: "calender" }
    ]
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    function a11yProps(index: any) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <RightDialogLayout

            onClose={() => dispatch(setProfileDialogMain(false))}
            open={profileDialogMain}
            closeBtnText="Profile"
            title={"John H. Doe"}

        >
            <Container>
                <Tabs value={value} indicatorColor="secondary" onChange={handleChange} aria-label="basic tabs example" textColor={text.main} >
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Clients" {...a11yProps(1)} />
                    <Tab label="Tasks" {...a11yProps(2)} /><Tab label="Calender" {...a11yProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0} >
                    <Grid container columnSpacing="10px">
                        <Grid item xl={4} >
                            <Grid padding="1rem 22px 2rem 0px">
                                <Grid display="flex" justifyContent="space-between" alignItems="flex-start" >
                                    <div  >

                                        <Typography color={text.main} sx={{ position: "relative", top: "25px", left: "5px" }}>
                                            ADMINSTRATOR
                                        </Typography>
                                        <HorzontalTag />
                                    </div>
                                    <Box display="flex" flexDirection="column">
                                        <Box justifyContent="flex-end" display="flex" alignItems="center">


                                            <CircleIcon sx={{
                                                width: "10px",
                                                height: "10px",
                                                color: "green",
                                                marginRight: "2px"
                                            }} />
                                            <Typography
                                                color={text.contrastText1}
                                            >
                                                ONLINE
                                            </Typography>
                                        </Box>
                                        <Typography color={text.xGrey} >
                                            Last seen 9 minutes ago
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid display="flex" justifyContent="center" marginTop="40px">
                                    <Avatar styles={{
                                        height: 150,
                                        width: 150,
                                    }} />
                                </Grid>

                            </Grid>
                            <Grid sx={{ padding: "10px 1rem 20px 16px", marginTop: "1rem" }}  >
                                <Typography variant='h6'>
                                    Appreciation
                                </Typography>
                                <Divider
                                    sx={{
                                        backgroundColor: text.xGrey2
                                    }}
                                />
                                <Grid>
                                    <RecommendIcon />   <RecommendIcon sx={{
                                        transform: "rotate(180deg)"
                                    }} /> <EmojiEmotionsIcon /> <StarsIcon />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xl={7} sx={{ padding: "1rem 2rem 1rem 1rem", marginLeft: "5px", }} >

                            <Grid display="flex" justifyContent="space-between">


                                <Typography variant='h5' color={text.xGrey}  >
                                    Contact Information
                                </Typography>


                                <Typography color={text.xGrey} >
                                    Edit
                                </Typography>


                            </Grid>
                            <Divider
                                sx={{
                                    backgroundColor: text.xGrey3,
                                    margin: "1rem 0"
                                }}
                            />
                            <Grid rowGap="10px" display="flex" flexDirection="column">
                                <Typography color={text.xGrey} >
                                    First Name
                                </Typography>
                                <Typography  >
                                    John
                                </Typography>
                                <Typography color={text.xGrey} marginTop="1rem">
                                    Last Name
                                </Typography>
                                <Typography  >
                                    Doe
                                </Typography>
                                <Typography color={text.xGrey} marginTop="1rem">
                                    Contact Email
                                </Typography>
                                <Typography color={secondary.main} >
                                    Johandoe@gmail.com
                                </Typography>
                                <Typography color={text.xGrey} marginTop="1rem">
                                    Mobile Number
                                </Typography>
                                <Typography  >
                                    (000) 000-000
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Container>
        </RightDialogLayout >
    );
}

export default ProfileDialog