import calendar from 'public/Assets/Svgs/calendar.svg'
import clients from 'public/Assets/Svgs/clients.svg'
import creditor from 'public/Assets/Svgs/creditor.svg'
import dashboard from 'public/Assets/Svgs/dashboard.svg'
import letterLibrary from 'public/Assets/Svgs/letter-library.svg'
import others from 'public/Assets/Svgs/others.svg'
import bell from 'public/Assets/Svgs/bell.svg'
import calendarDone from 'public/Assets/Svgs/calendar-done.svg'
import cards from 'public/Assets/Svgs/cards.svg'
import chat from 'public/Assets/Svgs/chat.svg'
import doubleChat from 'public/Assets/Svgs/double-chat.svg'
import graph from 'public/Assets/Svgs/graph.svg'
import helpLine from 'public/Assets/Svgs/help-line.svg'
import playOnTv from 'public/Assets/Svgs/play-on-tv.svg'
import stack from 'public/Assets/Svgs/stack.svg'
import question from 'public/Assets/Svgs/question.svg'

const sidebarRoutes = [
    {
        type: "menu-item",
        displayName: "Dashboard",
        icon: dashboard,
        path: '/'
    },
    {
        type: "menu-item",
        displayName: "Clients",
        icon: clients,
        path: '/clients'
    },
    {
        type: "menu-item",
        displayName: "Letter Library",
        icon: letterLibrary,
        path: '/letter-library'
    },
    {
        type: "menu-item",
        displayName: "Calender",
        icon: calendar,
        path: '/calender'
    },
    {
        type: "menu-item",
        displayName: "Creditor",
        icon: creditor,
        path: '/creditor'
    },
    {
        type: "divider",
    },
    {
        type: "menu-item",
        displayName: "Others",
        icon: others,
        collapsable: true,
        path: '/others'
    },
]

const rightbarRoutes = [
    {
        type: "button",
        icon: question,
    },
    {
        type: "button",
        icon: playOnTv,
    },
    {
        type: "button",
        icon: bell,
    },
    {
        type: "button",
        icon: chat,
    },
    {
        type: "button",
        icon: calendarDone,
    },
    {
        type: "wrapped-button",
        icon: stack,
    },
    {
        type: "wrapped-button",
        icon: cards,
    },
    {
        type: "wrapped-button",
        icon: graph,
    },
    {
        type: "bottom-button",
        icon: helpLine,
    },
    {
        type: "bottom-button",
        icon: doubleChat,
    },
]

export {
    sidebarRoutes,
    rightbarRoutes,
}