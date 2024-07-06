import React from 'react'
import Header from '@common/components/Header.tsx'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
