import React, { lazy } from 'react'

const Home = lazy(() => import('@ui/home/Home.tsx'))

const router = [
  {
    path: '',
    element: <Home />
  }
]

export default router
