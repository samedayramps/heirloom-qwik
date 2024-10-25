import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

// Export this array so it can be used in other files
export const blogPosts = [
  { slug: 'post-1', title: 'My First Blog Post', date: '2023-06-01', excerpt: 'An intriguing snippet from the first blog post...' },
  { slug: 'post-2', title: 'Another Interesting Article', date: '2023-06-15', excerpt: 'A short preview of the second most recent post...' },
  { slug: 'post-3', title: 'Yet More Thoughts', date: '2023-06-30', excerpt: 'A brief excerpt from the latest blog post...' },
];

export default component$(() => {
  return (
    <div class="container mx-auto py-10">
      <h1 class="text-4xl font-bold mb-8">My Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug} class="mb-4">
            <Link href={`/blog/${post.slug}`} class="text-xl text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p class="text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});
