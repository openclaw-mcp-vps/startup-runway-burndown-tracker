import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runway Tracker — Know Your Burn Before It Burns You',
  description: 'Track startup cash runway with expense forecasting. Connect bank accounts, monitor burn rate, and get alerts before hitting danger zones.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a2274c44-6ba1-4fd6-a617-7259c2b0368e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
