import { component$, useSignal, Slot } from "@builder.io/qwik";
import { Navbar } from '~/components/Navbar'; // Ensure this matches the export
import { Footer } from '~/components/Footer'; // Import the Footer component
import { ContactModal } from '~/components/ContactModal';

export default component$(() => {
  const isModalOpen = useSignal(false); // Manage the modal state here

  return (
    <>
      <div class="fixed top-0 left-0 right-0 h-[5vh] bg-gradient-to-b from-black/10 to-transparent z-40 pointer-events-none"></div>
      <Navbar isModalOpen={isModalOpen} />
      <ContactModal isModalOpen={isModalOpen} />
      <div class="mt-20 transition-margin duration-500 ease-in-out"> {/* Added transition */}
        <Slot />
      </div>
      <Footer />
    </>
  );
});
