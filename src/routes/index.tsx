import { component$, useSignal, $ } from "@builder.io/qwik";
import { ContactModal } from "~/components/ContactModal";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import { blogPosts } from './blog/index';
import { Stepper, type StepperStep } from "~/components/Stepper";

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
    question: "What's the process after booking?",
    answer: "We'll schedule a pre-wedding consultation to discuss your vision, timeline, and special moments you want captured. We stay in touch throughout the planning process to ensure everything runs smoothly.",
  },
  {
    question: "Do you travel for weddings?",
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
      <p class="text-lg mb-8 font-opensans">30+ Minute Wedding Films — All Day Coverage Included</p>
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
  <section id="features" class="py-20 heirloom-section">
    <div class="w-full relative">
      <div class="container mx-auto text-center relative px-4 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold mb-10 font-playfair text-base-100">
          HEIRLOOM is <span class="font-ephesis text-5xl mr-2">different</span>
        </h2>
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

const UniqueApproachSection = component$(() => (
  <section class="py-20 philosophy-section">
    <div class="container mx-auto px-6 md:px-8 lg:px-16">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6 font-playfair text-center">Our <span class="font-ephesis text-5xl mr-2">unique</span> approach</h2>
        <div class="text-justify">
          <p class="mb-6 font-opensans text-[1.1rem] leading-relaxed">
            At HEIRLOOM Wedding Films, we craft cinematic stories that you'll cherish for a lifetime and pass down through generations. Whether it's a traditional ceremony close to home or an exotic destination elopement, we're here to capture your unique love story in full.
          </p>
          <p class="mb-6 font-opensans text-[1.1rem] leading-relaxed">
            We take the time to get to know you, so your film truly reflects who you are. As passionate storytellers, we're constantly honing our craft to match the depth of your love.
            We love working with couples who are excited about preserving their memories as much as we are about capturing them.
          </p>
        </div>
      </div>
    </div>
  </section>
));

const WhatYoullExperience = component$(() => {
  const steps: StepperStep[] = [
    {
      title: "Initial Call",
      description: "We'll have a friendly chat about your wedding vision and answer your questions. This helps us both decide if we're the perfect match for your special day.",
    },
    {
      title: "Custom Plan",
      description: "Before the big day, we'll meet to get to know you, your family, and your wedding details. This ensures we capture your unique story in the most authentic way.",
    },
    {
      title: "Wedding Day",
      description: "On your wedding day, we'll be there from start to finish. We'll capture all the special moments discreetly, allowing you to fully enjoy your celebration.",
    },
    {
      title: "Film Delivery",
      description: "Within 90 days, you'll get your wedding film. Gather your loved ones to relive the magic – it's not just a video, but a family heirloom.",
    }
  ];

  return (
    <section id="experience" class="py-20 bg-base-100">
      <div class="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 class="text-3xl font-bold mb-6 font-playfair text-secondary text-center">
          Your <span class="font-ephesis text-5xl">experience</span>&nbsp;&nbsp;with us
        </h2>
        <p class="font-opensans mb-12 text-lg max-w-3xl mx-auto text-center">
          From our first hello to the moment you receive your heirloom film, we're here to make everything easy and enjoyable.
        </p>
        <Stepper steps={steps} />
      </div>
    </section>
  );
});

export default component$(() => {
  const isModalOpen = useSignal(false);

  // Extracted inline event handler
  const openModal = $(() => {
    isModalOpen.value = true;
  });

  return (
    <>
      <Hero />
      <UniqueApproachSection />
      <Features />
      <WhatYoullExperience />
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
