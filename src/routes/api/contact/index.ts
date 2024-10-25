import { sendEmail } from '~/services/email-service';

export const onPost = async (request: Request) => {
  try {
    const formData = await request.json();

    // Send email using Nodemailer
    const info = await sendEmail(formData);

    // Log email response
    console.log('Email sent successfully:', info.messageId);

    return new Response(JSON.stringify({ success: true, messageId: info.messageId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing form submission:', error);

    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};