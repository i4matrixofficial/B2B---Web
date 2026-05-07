import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://i4van.lk'),
  title: 'I4van.lk | Smart Staff Transport for Modern Companies',
  description: 'Reliable, safe, and trackable transport for employees and drivers.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico.png" />
      </head>
      <body className={`${display.variable} ${body.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
