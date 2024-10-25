import { component$ } from '@builder.io/qwik';
import { SimpleContactForm } from './SimpleContactForm';

export const ContactModal = component$(({ isModalOpen }: { isModalOpen: any }) => {
  return (
    <>
      {isModalOpen.value && (
        <div class="modal modal-open">
          <div class="modal-box relative p-0 m-0">
            <button
              class="btn btn-sm btn-circle absolute right-2 top-2"
              onClick$={() => (isModalOpen.value = false)}
            >
              ✕
            </button>
            <SimpleContactForm />
          </div>
        </div>
      )}
    </>
  );
});
