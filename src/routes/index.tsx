import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const openAccordion = useSignal<number | null>(null);

  const toggleAccordion = $((index: number) => {
    openAccordion.value = openAccordion.value === index ? null : index;
  });

  return (
    <>
      <section class="bg-base-100 text-secondary py-20">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 font-playfair">
            Your wedding day, remembered for <span class="font-ephesis text-6xl">generations</span>
          </h1>
          <p class="text-lg mb-8 font-opensans">Cinematic Documentary Wedding Films</p>
          <a href="#features" class="bg-secondary text-base-100 px-6 py-3 rounded-full font-semibold font-opensans">Learn More</a>
        </div>
      </section>

      <section id="features" class="py-20 bg-neutral">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4 font-playfair">Your Heirloom Film</h2>
          <p class="text-lg mb-8 font-opensans">A Timeless Keepsake Capturing Every Moment</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-base-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4 font-playfair">Full Day Coverage</h3>
              <p class="font-opensans">We start filming at morning preparations and end after your sendoff. Every ceremony word, reception speech, and dance move is captured. We're there before you arrive and after you leave.</p>
            </div>
            <div class="bg-base-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4 font-playfair">Everyone You Love</h3>
              <p class="font-opensans">Your marriage is built on the foundation of family and friendships. These relationships deserve to be part of your wedding story. We capture the people who shaped your journey to this day.</p>
            </div>
            <div class="bg-base-100 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-4 font-playfair">Pour Another Glass</h3>
              <p class="font-opensans">Your wedding story runs around 30 minutes long. Not a quick highlight reel—you'll want to open a bottle of wine and settle in to watch. Every key moment is included.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="py-20 bg-accent">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 font-playfair">Frequently Asked Questions</h2>
          <div class="space-y-4">
            {[
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
            ].map((faq, index) => (
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
        </div>
      </section>
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
