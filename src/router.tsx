import { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.tsx'
import Loading from '@common/components/Loading.tsx'
import NotFound from '@common/components/NotFound.tsx'

// pages
import home from '@entities/home/router.tsx'

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [...home],
    errorElement: <NotFound />
  }
])

export default router
