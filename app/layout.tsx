import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import './embla.css';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Mogul-e Media',
  description: 'Digital Marketing & SaaS Solutions Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
