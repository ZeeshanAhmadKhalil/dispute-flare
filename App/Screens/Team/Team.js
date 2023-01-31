import LinkCell from '@Components/Table/Components/LinkCell/LinkCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import { getId } from '@Config/helper';
import CircleIcon from '@mui/icons-material/Circle';
import {
    Divider,
    Grid,
    useTheme
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTeamDialog from './Components/AddTeam/AddTeamDialog';
import TeamAction from './Components/TeamActions';
import Value from './Components/Value';
import { setAddTeamDialog } from './Store/teamsSlice';

function Team() {

    const tabs = [
        { label: "Dashboard", value: "company-dashboard" },
        { label: "Company Profile", value: "company-profile" },
        { label: "Team", value: "team" },
        { label: "Flare Mail", value: "flare-mail" },
        { label: "Billing", value: "billing" },
    ]
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
            renderCell: ({ value }) => (
                <Grid>
                    <LinkCell value={value} />
                    <Box>
                        <CircleIcon
                            sx={{
                                width: "10px",
                                height: "10px",
                                color: "green",
                                marginRight: "2px"
                            }}
                        />
                        <span>Online</span>
                    </Box>
                </Grid>
            )
        },
        {
            field: 'contact',
            headerName: 'Contact',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,

            renderCell: Value,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,

            renderCell: LinkCell,
        },
        {
            field: 'department',
            headerName: 'Department',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,

            renderCell: Value,
        },
        {
            field: 'position',
            headerName: 'Position',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,

            renderCell: Value,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 200,
            headerClassName: 'separator-header',
            hidable: true,
            hide: false,

            renderCell: Value,
        },


    ]
    const departmentColumns = [
        {
            field: 'id',
            headerName: 'Id',
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
            renderCell: ({ value }) => (
                <Grid>
                    <Value value={value} />
                </Grid>
            )
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
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
            fullname: "John Wick",
            contact: "(000) 000-000",
            email: "Johanathn@gmail.com",
            department: "Administration",
            position: "Editor",
            address: "21 Ducie St, W1 6JD, CA"
        },
        {
            id: getId(),
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
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
        {
            id: getId(),
            title: "Lorem ipsum is a",
            status: "active"
        },
    ]

    const {
        palette
    } = useTheme()

    const dispatch = useDispatch()

    const {
        selectedClientId
    } = useSelector(state => state.shared)

    const [selectedDocuments, setSelectedDocuments] = useState([])

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
                        title="Team"
                        onSelectionModelChange={(selected) =>
                            setSelectedDocuments(selected)
                        }
                        noRowsAction={() =>
                            dispatch(setAddTeamDialog(true))
                        }
                        columns={columns}
                        rows={teams}
                    />
                </Grid>
                <Grid item xl="3" md="3" xs="12">
                    <Table
                        title="Department"
                        columns={departmentColumns}
                        rows={departments}
                    />
                </Grid>
            </Grid>
            <AddTeamDialog />
        </>
    )
}

export default Team