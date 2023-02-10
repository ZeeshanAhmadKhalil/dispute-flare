import { Box, useTheme } from '@mui/material'
import moment from 'moment'
import {
    Calendar,
    momentLocalizer
} from 'react-big-calendar'
import CalendarEvent from './Components/CalendarEvent'
import CalendarToolbar from './Components/CalendarToolbar'
import CalendarTabs from './Components/CalendarTabs'
import DateHeader from './Components/DateHeader'
import EventContainerWrapper from './Components/EventContainerWrapper'
import EventWrapper from './Components/EventWrapper'
import Header from './Components/Header'
import {
    useCallback,
    useRef,
    useState
} from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = ({
    events
}: any) => {

    const {
        palette: {
            background,
            text,
        }
    }: any = useTheme()

    const [view, setView] = useState('month')

    return (
        <Box>
            <CalendarTabs
                view={view}
                setView={setView}
            />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                view={view}
                style={{
                    height: 800,
                    background: background.main,
                    color: text.contrastText,
                    padding: 20,
                    borderRadius: 10,
                    marginTop: 20,
                }}
                components={{
                    toolbar: CalendarToolbar,
                    event: CalendarEvent,
                    eventWrapper: EventWrapper,
                    eventContainerWrapper: EventContainerWrapper,
                    month: {
                        header: Header,
                        dateHeader: DateHeader,
                    },
                    // timeSlotWrapper:()=>(<>sdf</>)
                    // dateCellWrapper: ()=>(<>sdf</>),
                    // day: {
                    //     header: ()=>(<>sdf</>),
                    //     event: ()=>(<>sdf</>),
                    // },
                }}
            />
        </Box>
    )
}

export default BigCalendar