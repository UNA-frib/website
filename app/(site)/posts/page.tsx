import { reader } from '../../reader';
import { PostPreview } from '../../../components/post-preview';
import { getExcerpt } from '../../../utils/markdoc';
import '../../styles.css';

export default async function PostsPage() {
  const posts = await reader.collections.posts.all();

  const postsWithExcerpts = await Promise.all(
    posts.map(async (post) => {
      const { node } = await post.entry.content();
      const excerpt = getExcerpt(node);
      return {
        slug: post.slug,
        title: post.entry.title,
        excerpt,
      };
    })
  );

  return (
    <div>
      <h1>All Posts</h1>
      <div>
        {postsWithExcerpts.map(post => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
