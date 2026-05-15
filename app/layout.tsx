import type { ReactNode } from 'react';
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  );
}
