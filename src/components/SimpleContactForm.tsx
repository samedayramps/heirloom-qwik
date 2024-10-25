import { component$, $ } from '@builder.io/qwik';

export const SimpleContactForm = component$(() => {
  const handleSubmit = $(
    async (event: Event) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      console.log('Submitting form data:', data);

      try {
        const response = await fetch('https://run.mocky.io/v3/5e88101c-9962-4f92-888e-306c0d60b6da', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          console.error('Failed to submit form');
          return;
        }

        const result = await response.json();
        console.log('Form submitted successfully:', result);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  );

  return (
    <form onSubmit$={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
});
