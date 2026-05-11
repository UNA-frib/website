import Link from 'next/link';

export function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #eaeaea',
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
      <Link href="/members">Members</Link>
    </nav>
  );
}
