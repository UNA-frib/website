import Link from 'next/link';
import styles from './navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/members">Members</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
