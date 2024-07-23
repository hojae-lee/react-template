import React, { lazy } from 'react'

const Home = lazy(() => import('@entities/home/Home.tsx'))

const router = [
  {
    path: '',
    element: <Home />
  }
]

export default router
