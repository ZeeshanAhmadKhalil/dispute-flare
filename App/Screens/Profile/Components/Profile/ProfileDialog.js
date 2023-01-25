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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { setProfileDialogMain } from '@Screens/Profile/Store/profileSlice';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import cls from 'classnames'
import styles from './AddFlowDialog.module.scss'
import { useForm } from 'react-hook-form';
import TopTabs from '@Components/TopTabs/TopTabs';
const Container = styled(Box)(({ theme }) => {

    const {
        dialog: {
            main
        }
    } = theme.palette || {}

    return {
        backgroundColor: main,
        padding: 20,
        marginTop: 10,
    }
})
function TabPanel(props) {
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
function ProfileDialog(props) {

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
        palette
    } = useTheme()
    const {
        profileDialogMain
    } = useSelector(state => state.profile)

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <RightDialogLayout

            onClose={() => dispatch(setProfileDialogMain(false))}
            open={profileDialogMain}
            closeBtnText=""
            title={"John H. Doe"}
        >
            <Container>
                <Tabs value={value} indicatorColor="secondary" onChange={handleChange} aria-label="basic tabs example" textColor={palette.text.main} >
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Clients" {...a11yProps(1)} />
                    <Tab label="Tasks" {...a11yProps(2)} /><Tab label="Calender" {...a11yProps(2)} />
                </Tabs>

                <TabPanel value={value} index={0} >
                    <Grid container>
                        <Grid xl="4" sx={{ backgroundColor: "red" }}>
                            johnnnn
                        </Grid>

                        doe                 <Grid xl="8" sx={{ backgroundColor: "yellow" }}>

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