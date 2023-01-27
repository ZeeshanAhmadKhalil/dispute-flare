import TopTabs from '@Components/TopTabs/TopTabs';
import ScrollContainer from '@Components/ScrollContainer/ScrollContainer';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import DateAdded from './Components/DateAdded';
import Title from './Components/Title';

import {
    Divider,
    Tab,
    Tabs,
    Typography,
    useTheme
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentsActions from "./Components/DocumentsActions";
import TilesView from './Components/TilesView';
import UploadedDocuments from './Components/UploadedDocuments';
import UploadingDocuments from './Components/UploadingFiles';
import {
    setAllColumnsVisibility,
    setColumnVisibility
} from './Store/documentsSlice';
function Documents(props) {


    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 150,
            hide: true,
            hidable: true,
        },
        {
            field: 'dateAdded',
            headerName: 'Date Added',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: DateAdded,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: Title,
        },
        {
            field: 'expirationDate',
            headerName: 'Expiration Date',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,
            renderCell: DateAdded,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            hidable: true,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Repaired', 'Verified', 'Negative', 'Delete'],
            renderCell: ({ value }) => <DropDownCell value={value} />,
        },


    ]
    const documents = [

        {
            id: 1,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 2,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 3,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 4,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 5,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 6,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 7,
            dateAdded: new Date(2022, 1, 1),
            title: "Razor",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 8,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",
        },
        {
            id: 9,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        },
        {
            id: 10,
            dateAdded: new Date(2022, 1, 1),
            title: "Bank Letter",
            expirationDate: new Date(2022, 1, 1),
            status: "Repaired",

        }

    ]
    const tabs = [
        { label: "Dashboard", value: "client-dashboard" },
        { label: "Dispute", value: "dispute" },
        { label: "Documents", value: "documents" },
        { label: "Internal Notes", value: "internal-note" },
    ]
    const {
        palette
    } = useTheme()

    const {
        selectedClientId
    } = useSelector(state => state.shared)
    const [value, setValue] = useState(0);
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


    return (
        <>
            <TopTabs tabs={tabs} />
            <ScrollContainer>
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

                        width: "15%",
                        borderRadius: "2rem",
                        marginTop: "1rem",
                        color: palette.icon.inactive,
                        padding: "0 1rem 2px 1rem"
                    }}
                >

                    <Tab label="List"  {...a11yProps(0)} />
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
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TilesView />
                </TabPanel>
            </ScrollContainer>
        </>
    )
}

export default Documents