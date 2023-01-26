import TopTabs from '@Components/TopTabs/TopTabs';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import { Divider, Grid, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
    setAllColumnsVisibility,
    setColumnVisibility,
} from './Store/teamsSlice';
import CircleIcon from '@mui/icons-material/Circle';
import Value from './Components/Value';
import TeamAction from './Components/TeamActions';
import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import AddTeamDialog from './Components/AddTeam/AddTeamDialog';



const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
        hide: true,
        hidable: true,
    },
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: ({ value }) => <Grid>
            <LinkCell value={value} />
            <Box>

                <CircleIcon sx={{
                    width: "10px",
                    height: "10px",
                    color: "green",
                    marginRight: "2px"
                }} /><span>Online</span>

            </Box>
        </Grid>
    },
    {
        field: 'contact',
        headerName: 'Contact',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <Value value={value} />,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <LinkCell value={value} />,
    },
    {
        field: 'department',
        headerName: 'Department',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <Value value={value} />,
    },
    {
        field: 'position',
        headerName: 'Position',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <Value value={value} />,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 200,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <Value value={value} />,
    },


]
const departmentcolumns = [
    {
        field: 'id',
        headerName: 'Id',
        //   width: 150,
        hide: true,
        hidable: true,
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 150,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,
        renderCell: ({ value }) => <Grid>
            <Value value={value} />

        </Grid>
    },
    {
        field: 'status',
        headerName: 'Satus',
        width: 190,
        headerClassName: 'separator-header',
        hidable: true,
        hide: false,

        renderCell: ({ value }) => <Value value={value} />,
    },



]
const teams = [
    {
        id: 1,
        fullname: "John Wick",
        contact: "(000) 000-000",
        email: "Johanathn@gmail.com",
        department: "Administration",
        position: "Editor",
        address: "21 Ducie St, W1 6JD, CA"
    }, {
        id: 1,
        fullname: "John Wick",
        contact: "(000) 000-000",
        email: "Johanathn@gmail.com",
        department: "Administration",
        position: "Editor",
        address: "21 Ducie St, W1 6JD, CA"
    }, {
        id: 1,
        fullname: "John Wick",
        contact: "(000) 000-000",
        email: "Johanathn@gmail.com",
        department: "Administration",
        position: "Editor",
        address: "21 Ducie St, W1 6JD, CA"
    }, {
        id: 1,
        fullname: "John Wick",
        contact: "(000) 000-000",
        email: "Johanathn@gmail.com",
        department: "Administration",
        position: "Editor",
        address: "21 Ducie St, W1 6JD, CA"
    }, {
        id: 1,
        fullname: "John Wick",
        contact: "(000) 000-000",
        email: "Johanathn@gmail.com",
        department: "Administration",
        position: "Editor",
        address: "21 Ducie St, W1 6JD, CA"
    },
]

const departments = [
    {
        id: 1,
        title: "Lorem ipsum is a",
        status: "active"
    },
    {
        id: 1,
        title: "Lorem ipsum is a",
        status: "active"
    }, {
        id: 1,
        title: "Lorem ipsum is a",
        status: "active"
    }, {
        id: 1,
        title: "Lorem ipsum is a",
        status: "active"
    }, {
        id: 1,
        title: "Lorem ipsum is a",
        status: "active"
    },]




function Team(props) {
    const tabs = [
        { label: "Letter Flow", value: "letterlibrary" },
        { label: "Templates", value: "templates" },
        { label: "Reasons", value: "reasons" },
        { label: "Instructions", value: "instructions" }
    ]
    const {
        palette
    } = useTheme()
    const {
        selectedClientId
    } = useSelector(state => state.shared)
    const [selectedDocuments, setSelectedDocuments] = useState([])



    useEffect(() => {
    }, [])

    return (
        <>
            <TopTabs tabs={tabs} />
            <TitleHeader
                title="Team"
                actionButtons={
                    <TeamAction
                        selectedDocuments={selectedDocuments}
                    />
                }
            />

            <Divider
                sx={{
                    borderWidth: 0.5,
                    borderColor: 'borders.main',
                    backgroundColor: 'borders.main',
                }} />

            <Grid container columnGap="1rem">
                <Grid item xl="8" md="8" xs="12">
                    <Table
                        autoHeight={true}
                        title="Teams"
                        onSelectionModelChange={(selected) =>
                            setSelectedDocuments(selected)
                        }
                        hasCreditMonitoringInfo={
                            selectedClientId == 1 ||
                            selectedClientId == 2
                        }
                        columns={columns}
                        rows={teams}
                        setColumnVisibility={setColumnVisibility}
                        setAllColumnsVisibility={setAllColumnsVisibility}
                    />
                </Grid>
                <Grid item xl="3" md="3" xs="12">
                    <Table
                        autoHeight={true}
                        title="Teams"
                        // onSelectionModelChange={(selected) =>
                        //     setSelectedDocuments(selected)
                        // }
                        hasCreditMonitoringInfo={
                            selectedClientId == 1 ||
                            selectedClientId == 2
                        }
                        columns={departmentcolumns}
                        rows={departments}
                        setColumnVisibility={setColumnVisibility}
                        setAllColumnsVisibility={setAllColumnsVisibility}
                    />
                </Grid>


            </Grid>

            <AddTeamDialog />
        </>
    )
}

export default Team