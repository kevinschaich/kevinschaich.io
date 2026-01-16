import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Kevin Schaich',
  description: 'Building cool shit @ darkgrade',
  keywords: ['Kevin', 'Schaich', 'Kevin Schaich', 'Kevinschaich', 'Palantir', 'mintable', 'darkgrade'],
  authors: [{ name: 'Kevin Schaich' }],
  openGraph: {
    title: 'Kevin Schaich',
    description: 'Building cool shit @ darkgrade',
    images: ['/img/avatar.jpg'],
    url: 'https://kevinschaich.io',
    siteName: 'Kevin Schaich',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kevinschaich',
    images: ['/img/avatar.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-124166431-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-124166431-1');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
