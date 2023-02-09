import AvatarNameCell from '@Components/Table/Components/AvatarNameCell/AvatarNameCell';
import DateCell from '@Components/Table/Components/DateCell/DateCell';
import DropDownCell from '@Components/Table/Components/DropDownCell/DropDownCell';
import Table from '@Components/Table/Table';
import TitleHeader from '@Components/TitleHeader/TitleHeader';
import TopTabs from '@Components/TopTabs/TopTabs';
import AddTaskDialog from '@Screens/Calendar/Components/AddTask/AddTaskDialog';
import { setAddTaskDialog } from '@Screens/Calendar/Store/calendarSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskActions from './Components/TaskActions';

let columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 50,
        hide: true,
        hidable: true,
    },
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        width: 200,
        renderCell: DateCell,
        hide: false,
        hidable: true,
    },
    {
        field: 'task',
        headerName: 'Task',
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'teamMember',
        headerName: 'Team Member',
        renderCell: AvatarNameCell,
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'client',
        headerName: 'Client',
        renderCell: (props: any) =>
            <AvatarNameCell
                {...props}
                isSecond
            />
        ,
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'priority',
        headerName: 'Priority',
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'due',
        headerName: 'Due',
        renderCell: DateCell,
        width: 200,
        hide: false,
        hidable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        hidable: true,
        editable: true,
        type: 'singleSelect',
        valueOptions: ['Overdue', 'Upcoming'],
        renderCell: DropDownCell,
    },
]
let tasks = [
    {
        id: 1,
        dateCreated: new Date(2023, 0, 1),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Ryokugyu",
        pfp: "/Assets/Images/ryokugyu.png",
        client: "Fujitora",
        pfp1: "/Assets/Images/fujitora.png",
        priority: "High",
        due: new Date(2023, 0, 1),
        status: "Overdue",
    },
    {
        id: 2,
        dateCreated: new Date(2023, 0, 2),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Aokiji",
        pfp: "/Assets/Images/aokiji.png",
        client: "Kizaru",
        pfp1: "/Assets/Images/kizaru.png",
        priority: "High",
        due: new Date(2023, 0, 2),
        status: "Overdue",
    },
    {
        id: 3,
        dateCreated: new Date(2023, 0, 3),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Akainu",
        pfp: "/Assets/Images/akainu.png",
        client: "Sengoku",
        pfp1: "/Assets/Images/sengoku.png",
        priority: "High",
        due: new Date(2023, 0, 3),
        status: "Overdue",
    },
    {
        id: 4,
        dateCreated: new Date(2023, 0, 4),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Nico robin",
        pfp: "/Assets/Images/nico-robin.png",
        client: "Boa-hancock",
        pfp1: "/Assets/Images/boa-hancock.png",
        priority: "High",
        due: new Date(2023, 0, 4),
        status: "Overdue",
    },
    {
        id: 5,
        dateCreated: new Date(2023, 0, 5),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Vinsmoke reiju",
        pfp: "/Assets/Images/vinsmoke-reiju.png",
        client: "Jewelry bonney",
        pfp1: "/Assets/Images/jewelry-bonney.png",
        priority: "High",
        due: new Date(2023, 0, 5),
        status: "Overdue",
    },
    {
        id: 6,
        dateCreated: new Date(2023, 0, 6),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Nefertar vivi",
        pfp: "/Assets/Images/nefertar-vivi.png",
        client: "Perona",
        pfp1: "/Assets/Images/perona.png",
        priority: "High",
        due: new Date(2023, 0, 6),
        status: "Overdue",
    },
    {
        id: 7,
        dateCreated: new Date(2023, 0, 7),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Charlotte pudding",
        pfp: "/Assets/Images/charlotte-pudding.png",
        client: "Shirahoshi",
        pfp1: "/Assets/Images/shirahoshi.png",
        priority: "High",
        due: new Date(2023, 0, 7),
        status: "Overdue",
    },
    {
        id: 8,
        dateCreated: new Date(2023, 0, 8),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Nojiko",
        pfp: "/Assets/Images/nojiko.png",
        client: "Vinsmoke sora",
        pfp1: "/Assets/Images/vinsmoke-sora.png",
        priority: "High",
        due: new Date(2023, 0, 8),
        status: "Overdue",
    },
    {
        id: 9,
        dateCreated: new Date(2023, 0, 9),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Alvida",
        pfp: "/Assets/Images/alvida.png",
        client: "Belo betty",
        pfp1: "/Assets/Images/belo-betty.png",
        priority: "High",
        due: new Date(2023, 0, 9),
        status: "Overdue",
    },
    {
        id: 10,
        dateCreated: new Date(2023, 0, 10),
        task: "Dispute Flare",
        category: "Wing Chun",
        teamMember: "Moodie",
        pfp: "/Assets/Images/moodie.png",
        client: "Sadi",
        pfp1: "/Assets/Images/sadi.png",
        priority: "High",
        due: new Date(2023, 0, 10),
        status: "Overdue",
    },
]

function Task() {

    const priorityList = [
        { label: "All", value: 1 },
        { label: "High", value: 2 },
        { label: "Medium", value: 3 },
        { label: "Low", value: 4 },
    ]
    const tabs = [
        { label: "Calendar", value: "calendar" },
        { label: "Task", value: "task" },
    ]

    const dispatch = useDispatch()

    const [priority, setPriority] = useState(1)

    console.log("priority===>", priority)

    return (
        <>
            <TopTabs
                tabs={tabs}
            />

            <TitleHeader
                title="Task"
                actionButtons={
                    <TaskActions
                        priority={priority}
                        setPriority={setPriority}
                        priorityList={priorityList}
                    />
                }
            />
            <Table
                title="Task"
                noRowsAction={() => {
                    dispatch(setAddTaskDialog(true))
                }}
                columns={columns}
                rows={tasks}
            />

            <AddTaskDialog />
        </>
    )
}

export default Task