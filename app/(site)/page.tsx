import { reader } from '../reader';
import { getExcerpt } from '../../utils/markdoc';
import { ActivitySection } from '../../sections/activity-section';

export default async function Homepage() {
  const posts = await reader.collections.posts.all();

  // Resolve content and excerpts for all posts
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
      <ActivitySection />
      
      <h1>Keystatic ⚡️</h1>
      <p>This homepage shows how to load a collection from the reader API.</p>
      <p>
        <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
        below to view a post in the collection.
      </p>
    </div>
  );
}
