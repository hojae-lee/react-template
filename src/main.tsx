import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router.tsx'

import './index.css'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser.js')

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/') || request.url.includes('src/api/')) {
        return
      }

      print.warning()
    }
  })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
})
