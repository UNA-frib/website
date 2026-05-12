import Link from 'next/link';
import styles from './post-preview.module.css';

type PostPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export function PostPreview({ slug, title, excerpt }: PostPreviewProps) {
  return (
    <article className={styles.postPreview}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link href={`/posts/${slug}`} className={styles.readMore}>
        Read more →
      </Link>
    </article>
  );
}
