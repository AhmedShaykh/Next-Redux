import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Redux In Next.JS!",
  description: "Redux Toolkit In Next.JS!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-900 text-zinc-500`}
      >
        {children}
      </body>
    </html>
  )
};