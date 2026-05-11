import Link from 'next/link';
import { reader } from '../reader';
import '../styles.css';

export default async function PostsPage() {
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">Back to Homepage</Link>
      </p>
    </div>
  );
}
