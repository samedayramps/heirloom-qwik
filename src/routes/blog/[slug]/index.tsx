import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

// This could be expanded to dynamically load post content
const posts: Record<string, { title: string; date: string; content: string }> = {
  'post-1': {
    title: 'My First Blog Post',
    date: '2023-06-01',
    content: 'This is the content of my first blog post. It can include paragraphs, lists, and other HTML elements.'
  },
  'post-2': {
    title: 'Another Interesting Article',
    date: '2023-06-15',
    content: 'Content for the second post goes here...'
  },
  'post-3': {
    title: 'Yet More Thoughts',
    date: '2023-06-30',
    content: 'Content for the third post goes here...'
  }
};

export default component$(() => {
  const loc = useLocation();
  const slug = loc.params.slug;
  const post = posts[slug];

  if (!(slug in posts)) {
    return <div>Post not found</div>;
  }

  return (
    <article class="container mx-auto py-10">
      <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
      <p class="text-gray-500 mb-4">Published on {post.date}</p>
      <div class="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
});
