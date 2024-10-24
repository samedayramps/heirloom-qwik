import { component$, useSignal, Slot } from "@builder.io/qwik";
import { Navbar } from '~/components/Navbar'; // Ensure this matches the export
import { Footer } from '~/components/Footer'; // Import the Footer component
import { ContactModal } from '~/components/ContactModal';

export default component$(() => {
  const isModalOpen = useSignal(false); // Manage the modal state here

  return (
    <>
      <Navbar isModalOpen={isModalOpen} />
      <ContactModal isModalOpen={isModalOpen} />
      <div>
        <Slot />
      </div>
      <Footer />
    </>
  );
});
