import calendar from 'public/Assets/Svgs/calendar.svg'
import clients from 'public/Assets/Svgs/clients.svg'
import creditor from 'public/Assets/Svgs/creditor.svg'
import dashboard from 'public/Assets/Svgs/dashboard.svg'
import letterLibrary from 'public/Assets/Svgs/letter-library.svg'
import others from 'public/Assets/Svgs/others.svg'

const routes = [
    {
        type: "menu-item",
        displayName: "Dashboard",
        icon: dashboard,
    },
    {
        type: "menu-item",
        displayName: "Clients",
        icon: clients,
    },
    {
        type: "menu-item",
        displayName: "Letter Library",
        icon: letterLibrary,
    },
    {
        type: "menu-item",
        displayName: "Calender",
        icon: calendar,
    },
    {
        type: "menu-item",
        displayName: "Creditor",
        icon: creditor,
    },
    {
        type: "divider",
    },
    {
        type: "menu-item",
        displayName: "Others",
        icon: others,
        collapsable: true,
    },
]

export default routes