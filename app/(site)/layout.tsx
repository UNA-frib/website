import type { ReactNode } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import '../globals.css';


export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
