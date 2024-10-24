import { component$, useSignal, $ } from '@builder.io/qwik';

export const ContactForm = component$(() => {
  const formData = {
    firstName: useSignal(''),
    lastName: useSignal(''),
    email: useSignal(''),
    phoneNumber: useSignal(''),
    weddingDate: useSignal(''),
    weddingVenue: useSignal(''),
    message: useSignal(''),
    referralSource: useSignal(''),
  };

  const handleSubmit = $(() => {
    const email = formData.email.value;
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Form submitted:', {
      firstName: formData.firstName.value,
      lastName: formData.lastName.value,
      email: formData.email.value,
      phoneNumber: formData.phoneNumber.value,
      weddingDate: formData.weddingDate.value,
      weddingVenue: formData.weddingVenue.value,
      message: formData.message.value,
      referralSource: formData.referralSource.value,
    });
  });

  const validateEmail = $((email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  });

  return (
    <form class="max-w-lg mx-auto p-8 bg-base-100 shadow-md rounded" onSubmit$={handleSubmit}>
      <p class="text-center text-secondary mb-4 text-lg">
        Enter your details to start a conversation. We are excited to hear from you!
      </p>
      <div class="flex mb-2 space-x-4">
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="firstName">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            class="input input-bordered w-full"
            bind:value={formData.firstName}
            required
          />
        </div>
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="lastName">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            class="input input-bordered w-full"
            bind:value={formData.lastName}
            required
          />
        </div>
      </div>
      <div class="flex mb-2 space-x-4">
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="email">
            Email*
          </label>
          <input
            type="email"
            id="email"
            class="input input-bordered w-full"
            bind:value={formData.email}
            required
          />
        </div>
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            class="input input-bordered w-full"
            bind:value={formData.phoneNumber}
          />
        </div>
      </div>
      <div class="flex mb-2 space-x-4">
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="weddingDate">
            Wedding Date
          </label>
          <input
            type="date"
            id="weddingDate"
            class="input input-bordered w-full"
            bind:value={formData.weddingDate}
          />
        </div>
        <div class="w-1/2">
          <label class="block text-secondary text-sm font-bold mb-1" for="weddingVenue">
            Venue & City
          </label>
          <input
            type="text"
            id="weddingVenue"
            class="input input-bordered w-full"
            bind:value={formData.weddingVenue}
          />
        </div>
      </div>
      <div class="mb-2">
        <label class="block text-secondary text-sm font-bold mb-1" for="referralSource">
          How Did You Hear About Us
        </label>
        <input
          type="text"
          id="referralSource"
          class="input input-bordered w-full"
          bind:value={formData.referralSource}
        />
      </div>
      <div class="mb-2">
        <label class="block text-secondary text-sm font-bold mb-1" for="message">
          Message
        </label>
        <textarea
          id="message"
          class="textarea textarea-bordered w-full"
          bind:value={formData.message}
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
});
