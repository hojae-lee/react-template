import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const CalendarTemplate = () => {
  const [events] = useState([
    { title: '이벤트 1', date: '2024-08-20' },
    { title: '이벤트 2', date: '2024-08-25' }
  ])

  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
}

export default CalendarTemplate
