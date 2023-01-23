import { useTheme } from '@mui/material'
import moment from 'moment'
import {
    Calendar,
    momentLocalizer
} from 'react-big-calendar'
import CalendarToolbar from './Components/CalendarToolbar'
import Header from './Components/Header'

const localizer = momentLocalizer(moment)

const BigCalendar = ({
    events
}) => {

    const {
        palette: {
            background,
            text,
        }
    } = useTheme()

    return (

        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView='month'
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
                month: {
                    header: Header,
                }
            }}
        />
    )
}

export default BigCalendar