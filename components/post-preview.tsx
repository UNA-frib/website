import Link from 'next/link';

type PostPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export function PostPreview({ slug, title, excerpt }: PostPreviewProps) {
  return (
    <article style={{ 
      border: '1px solid #eaeaea', 
      padding: '1.5rem', 
      borderRadius: '8px',
      marginBottom: '1.5rem',
      backgroundColor: '#fafafa'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
      <p style={{ 
        color: '#666', 
        lineHeight: '1.5',
        margin: '0 0 1rem 0'
      }}>
        {excerpt}
      </p>
      <Link href={`/${slug}`} style={{ color: '#0070f3', fontWeight: '500' }}>
        Lire l'article
      </Link>
    </article>
  );
}
