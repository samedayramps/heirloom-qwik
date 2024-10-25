import { component$ } from '@builder.io/qwik'; // Correct import for component$
import { routeAction$, zod$, z, Form } from '@builder.io/qwik-city';

export const useContactFormAction = routeAction$(
  async (formData) => {
    console.log('Form submission handler called'); // Log when the handler is called
    console.log('Form data received:', formData); // Log the form data

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.error('Failed to submit form'); // Log error
      throw new Error('Failed to submit form');
    }

    console.log('Form submitted successfully'); // Log success

    return {
      success: true,
      message: 'Form submitted successfully!',
    };
  },
  zod$({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
  })
);

export default component$(() => {
  const contactFormAction = useContactFormAction();

  return (
    <Form action={contactFormAction}>
      <input name="name" placeholder="Name" />
      {contactFormAction.value?.fieldErrors?.name && <p>{contactFormAction.value.fieldErrors.name}</p>}
      <input name="email" placeholder="Email" />
      {contactFormAction.value?.fieldErrors?.email && <p>{contactFormAction.value.fieldErrors.email}</p>}
      <textarea name="message" placeholder="Message"></textarea>
      {contactFormAction.value?.fieldErrors?.message && <p>{contactFormAction.value.fieldErrors.message}</p>}
      <button type="submit" class="btn btn-primary">Submit</button>
      {contactFormAction.value?.success && <p>{contactFormAction.value.message}</p>}
    </Form>
  );
});
