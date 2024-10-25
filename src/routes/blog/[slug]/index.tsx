import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

// This could be expanded to dynamically load post content
const posts: Record<string, { title: string; date: string; content: string }> = {
  'post-1': {
    title: 'Why You Don\'t Want a Wedding Highlight Film',
    date: '2023-06-01',
    content: `
      <p>Imagine your favorite movie cut down to just 5 minutes. You'd see the big moments, but miss everything that makes the story meaningful. That's exactly what happens with wedding highlight films.</p>

      <h3>Beyond the Highlight Reel</h3>
      <p>Yes, a highlight film is exciting at first. Quick cuts, dramatic music, stunning drone shots—it feels like a movie trailer. But like a trailer, it's made for quick views. After watching it a few times, there's nothing new to discover, no moments to get lost in.</p>

      <h3>What You're Actually Missing</h3>
      <ul>
        <li>Your father's entire heartfelt speech</li>
        <li>The full story of how your best friend made you laugh during photos</li>
        <li>Your grandmother's expressions during the ceremony</li>
        <li>Those quiet moments before walking down the aisle</li>
        <li>Every word of your personally written vows</li>
        <li>The real reactions and emotions of your guests</li>
      </ul>

      <h3>Time to Breathe</h3>
      <p>A 20-30 minute film lets you truly relive your day. Pour a glass of wine, settle in, and experience everything again. Each time you watch, you'll notice something new: your mom wiping away tears in the background, your cousin's incredible dance moves, the way your partner looked at you during first dance.</p>

      <h3>It's Not Just Your Story</h3>
      <p>Your wedding wasn't just about you—it was about everyone who came to celebrate. Twenty years from now, you'll treasure having full moments with relatives and friends, not just split-second shots of their faces.</p>

      <h3>The Real Memory</h3>
      <p>A highlight film shows you what your wedding looked like. A documentary film lets you experience how it felt. Years from now, which would you rather share with your children?</p>

      <p>Your wedding day is a once-in-a-lifetime celebration. Don't let it be reduced to just the highlights. Choose a film that tells your complete story—one that captures not just the big moments, but the heart and soul of your entire celebration.</p>
    `
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
    <article class="article-container">
      <h1 class="article-title">{post.title}</h1>
      <p class="article-date">Published on {post.date}</p>
      <div class="article-content prose lg:prose-xl" dangerouslySetInnerHTML={post.content}></div>
    </article>
  );
});
