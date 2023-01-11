import ClientTopTabs from '@Components/ClientTopTabs/ClientTopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { Divider, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UploadedDocuments from './Components/UploadedDocuments';
import UploadingDocuments from './Components/UploadingFiles';
import DocumentsActions from "./Components/DocumentsActions";
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/documentsSlice';
import TilesView from './Components/TilesView';
function Documents(props) {

    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Tasks Manager", value: "taskmanager" },
        { label: "Internal Notes", value: "internal-notes" },
    ]
    const {
        palette
    } = useTheme()
    const dispatch = useDispatch()
    const {
        columns,
        documents,
    } = useSelector(state => state.documents)
    const {
        selectedClientId
    } = useSelector(state => state.shared)
    const [value, setValue] = React.useState(0);
    const [selectedDocuments, setSelectedDocuments] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

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

    useEffect(() => {
    }, [])

    return (
        <>
            <ClientTopTabs tabs={tabs} />
            <TitleHeader
                title="Documents"
                actionButtons={
                    <DocumentsActions
                        selectedDocuments={selectedDocuments}
                    />
                }
            />
            <Box sx={{ display: "flex", padding: "1rem" }}>
                <UploadedDocuments />
                <UploadingDocuments />
            </Box>
            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />

            <Tabs
                value={value}
                //    ref={() => console.log("iammounted ")}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor='secondary'
                indicatorColor='secondary'
                variant='srollable'



                sx={{
                    backgroundColor: palette.transWhite.main,

                    width: "20%",
                    borderRadius: "2rem",
                    marginTop: "1rem",
                    color: palette.icon.inactive,
                    padding: "0 2rem 2px 2rem"
                }}
            >

                <Tab label="Documents Added" {...a11yProps(0)} />
                <Tab label="Tiles" {...a11yProps(1)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <Table
                    autoHeight={true}
                    title="Documents"
                    onSelectionModelChange={(selected) =>
                        setSelectedDocuments(selected)
                    }
                    hasCreditMonitoringInfo={
                        selectedClientId == 1 ||
                        selectedClientId == 2
                    }
                    columns={columns}
                    rows={documents}
                    setColumnVisibility={setColumnVisibility}
                    setAllColumnsVisibility={setAllColumnsVisibility}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TilesView />
            </TabPanel>


        </>
    )
}

export default Documents