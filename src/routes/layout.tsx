import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from '~/components/Navbar'; // Ensure this matches the export
import { Footer } from '~/components/Footer'; // Import the Footer component
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <Navbar />
      <Slot />
      <Footer /> {/* Add the Footer component here */}
    </>
  );
});