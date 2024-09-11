'use client'

import Footer from './footer'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Your existing header and navigation */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}