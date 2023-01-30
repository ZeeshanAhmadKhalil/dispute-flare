import Calendar from 'public/Assets/Svgs/calendar.svg'
import Clients from 'public/Assets/Svgs/clients.svg'
import Creditor from 'public/Assets/Svgs/creditor.svg'
import Dashboard from 'public/Assets/Svgs/dashboard.svg'
import LetterLibrary from 'public/Assets/Svgs/letter-library.svg'
import Others from 'public/Assets/Svgs/others.svg'
import Bell from 'public/Assets/Svgs/bell.svg'
import CalendarDone from 'public/Assets/Svgs/calendar-done.svg'
import Cards from 'public/Assets/Svgs/cards.svg'
import Chat from 'public/Assets/Svgs/chat.svg'
import DoubleChat from 'public/Assets/Svgs/double-chat.svg'
import Graph from 'public/Assets/Svgs/graph.svg'
import HelpLine from 'public/Assets/Svgs/help-line.svg'
import PlayOnTv from 'public/Assets/Svgs/play-on-tv.svg'
import Stack from 'public/Assets/Svgs/stack.svg'
import Question from 'public/Assets/Svgs/question.svg'
import BusinessIcon from '@mui/icons-material/Business';
const sidebarRoutes = [
    {
        type: "menu-item",
        displayName: "Dashboard",
        icon: (
            <Dashboard
                width={22}
                height={22}
            />
        ),
        path: '/'
    },
    {
        type: "menu-item",
        displayName: "Clients",
        icon: (
            <Clients
                width={22}
                height={22}
            />
        ),
        path: '/client'
    },
    {
        type: "menu-item",
        displayName: "Letter Library",
        icon: (
            <LetterLibrary
                width={22}
                height={22}
            />
        ),
        path: '/letterlibrary'
    },
    {
        type: "menu-item",
        displayName: "Calendar",
        icon: (
            <Calendar
                width={22}
                height={22}
            />
        ),
        path: '/calendar'
    },
    {
        type: "menu-item",
        displayName: "Creditor",
        icon: (
            <Creditor
                width={22}
                height={22}
            />
        ),
        path: '/creditor'
    },
    {
        type: "divider",
    }, ,
    {
        type: "menu-item",
        displayName: "My Company",
        icon: (
            <BusinessIcon
                fontSize="medium"
            />
        ),
        collapsable: false,
        path: '/company-dashboard'
    },

    {
        type: "menu-item",
        displayName: "Others",
        icon: (
            <Others
                width={25}
                height={25}
            />
        ),
        collapsable: true,
        path: '/others'
    }
]

const rightbarRoutes = [
    {
        type: "button",
        icon: (
            <Question
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "button",
        icon: (
            <PlayOnTv
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "button",
        icon: (
            <Bell
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "button",
        icon: (
            <Chat
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "button",
        icon: (
            <CalendarDone
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "wrapped-button",
        icon: (
            <Stack
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "wrapped-button",
        icon: (
            <Cards
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "wrapped-button",
        icon: (
            <Graph
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "bottom-button",
        icon: (
            <HelpLine
                width={35}
                height={35}
            />
        ),
    },
    {
        type: "bottom-button",
        icon: (
            <DoubleChat
                width={35}
                height={35}
            />
        ),
    },
]

export {
    sidebarRoutes,
    rightbarRoutes,
}