import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/images/una_logo.png"
          alt="UNA Logo"
          width={60}
          height={60}
          className={styles.logo}
        />
      </Link>
      <Link href="/members">Members</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
