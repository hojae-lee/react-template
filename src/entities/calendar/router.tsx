import { lazy } from 'react'

const Calendar = lazy(() => import('@entities/calendar/Calendar.tsx'))

const router = [
  {
    path: '/calendar',
    element: <Calendar />
  }
]

export default router
