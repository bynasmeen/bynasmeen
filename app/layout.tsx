import type { Metadata } from 'next';
import './globals.css';
import './modern.css';
import './story-content.css';
export const metadata: Metadata = { title: 'by Nasmeen — Software Engineer', description: 'Nasmeen Islam — Software Engineer focused on backend development with Go and Java. Work at MakeFunnel, Bitkub, SET, and AIMET.Tech.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
