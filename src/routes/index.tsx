import { component$, useSignal, $ } from "@builder.io/qwik";
import { ContactModal } from "~/components/ContactModal";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import { blogPosts } from './blog/index';

// Static content moved outside the component
const FEATURES = [
  {
    title: "The Full Story",
    description: (
      <>
        This isn't a quick highlight video—it's the complete story of your day. Get comfortable, pour some wine, and relive every moment. <em>Our films typically run 30 minutes.</em>
      </>
    )
  },
  {
    title: "Unlimited Hours",
    description: "We film your entire day—from the wedding party getting ready until your sparkler exit. No hourly limits. No watching the clock. Just enjoy your wedding day."
  },
  {
    title: "All Your People",
    description: "Your wedding film includes everyone you love. We capture real moments and natural conversations with family and friends throughout your day. Because they're part of your story."
  }
];

const FAQS = [
  {
    question: "When will we receive our wedding film?",
    answer: "Your complete wedding film will be delivered within 12 weeks of your wedding date. We'll send you easy-to-share digital files, plus a beautifully packaged USB drive for safekeeping.",
  },
  {
    question: "What happens after we book?",
    answer: "We'll schedule a pre-wedding consultation to discuss your vision, timeline, and special moments you want captured. We stay in touch throughout the planning process to ensure everything runs smoothly.",
  },
  {
    question: "Do you film destination weddings?",
    answer: "Yes! We love traveling for weddings. All destinations welcome. Travel fees are determined based on location - just let us know where you're planning to celebrate.",
  },
];

// Smaller, focused components
const Hero = component$(() => (
  <section class="bg-base-100 text-secondary py-32">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold mb-4 font-playfair">
        Your wedding day, remembered for <span class="font-ephesis text-6xl">generations</span>
      </h1>
      <p class="text-lg mb-8 font-opensans">Cinematic Documentary Wedding Films</p>
      <a href="/films" class="bg-secondary text-base-100 px-6 py-3 rounded-full font-semibold font-opensans">
        WATCH FILMS
      </a>
    </div>
  </section>
));

const FeatureCard = component$(({ title, description }: { title: string; description: any }) => (
  <div class="heirloom-card">
    <h3 class="text-xl font-semibold mb-4 font-playfair">{title}</h3>
    <p class="font-opensans">{description}</p>
  </div>
));

const Features = component$(() => (
  <section id="features" class="py-20 bg-neutral heirloom-section">
    <div class="w-full relative">
      <div class="container mx-auto text-center relative px-4 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold mb-10 font-playfair text-secondary">What You Get</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

const FAQ = component$(() => {
  const openAccordion = useSignal<number | null>(null);

  const toggleAccordion = $((index: number) => {
    openAccordion.value = openAccordion.value === index ? null : index;
  });

  return (
    <div class="space-y-4">
      {FAQS.map((faq, index) => (
        <div key={index} class="collapse collapse-arrow bg-base-100 rounded-lg shadow-md">
          <input
            type="checkbox"
            checked={openAccordion.value === index}
            onChange$={() => toggleAccordion(index)}
          />
          <div class="collapse-title text-xl font-semibold font-playfair">
            {faq.question}
          </div>
          <div class="collapse-content">
            <p class="font-opensans">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

// Add this loader to fetch the latest blog posts
export const useLatestBlogPosts = routeLoader$(() => {
  // In a real-world scenario, you might fetch this data from an API or database
  // For now, we'll use the exported blogPosts array and sort it to get the latest posts
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
});

// Update the LatestBlogPosts component to use the loader data
const LatestBlogPosts = component$(() => {
  const latestPosts = useLatestBlogPosts();

  return (
    <section id="latest-posts" class="py-20 bg-base-100">
      <div class="container mx-auto px-6 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold mb-10 font-playfair text-secondary text-center">Latest from the Blog</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.value.map((post) => (
            <div key={post.slug} class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2 font-playfair">{post.title}</h3>
                <p class="text-gray-600 text-sm mb-4">{post.date}</p>
                <p class="text-gray-700 mb-4 font-opensans">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.slug}`} 
                  class="text-secondary hover:text-secondary-dark font-semibold font-opensans"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const PhilosophySection = component$(() => (
  <section class="bg-tertiary text-white py-20 philosophy-section">
    <div class="container mx-auto px-6 md:px-8 lg:px-16 text-center">
      <h2 class="text-3xl font-bold mb-4 font-playfair">Our Philosophy</h2>
      <p class="mb-8 font-opensans">
        At our core, we believe in capturing the essence of every moment. Our philosophy is rooted in authenticity, creativity, and a deep respect for the stories we tell. We strive to create timeless pieces that resonate with the heart and soul.
      </p>
      {/* Add more content or components as needed */}
    </div>
  </section>
));

export default component$(() => {
  const isModalOpen = useSignal(false);

  // Extracted inline event handler
  const openModal = $(() => {
    isModalOpen.value = true;
  });

  return (
    <>
      <Hero />
      <PhilosophySection />
      <Features />
      <section id="faq" class="py-20 bg-accent faq-section">
        <div class="container mx-auto px-6 md:px-8 lg:px-16">
          <div class="flex items-center justify-center space-x-4 mb-12">
            <h2 class="text-3xl font-bold font-playfair text-base-100">Have questions?</h2>
            <button
              class="btn bg-neutral hover:bg-neutral-dark text-secondary border-none font-opensans font-bold rounded-full"
              onClick$={openModal}
            >
              LET'S TALK
            </button>
          </div>
          <FAQ />
        </div>
      </section>
      <LatestBlogPosts />
      <ContactModal isModalOpen={isModalOpen} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
