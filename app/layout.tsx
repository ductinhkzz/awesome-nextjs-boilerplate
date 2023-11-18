import { Inter } from 'next/font/google';

import './globals.css';
import { AuthProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body suppressHydrationWarning={true} className='bg-gradient-to-r from-purple-100 to-indigo-200'>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
