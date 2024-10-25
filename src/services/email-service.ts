// src/services/email-service.ts

export const sendEmail = async (formData: any) => {
  try {
    // Dynamically import nodemailer
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ty@heirloomweddingfilms.com',
        pass: 'eeju hakt eeyl zqxp',
      },
    });

    const mailOptions = {
      from: formData.email,
      to: 'ty@heirloomweddingfilms.com',
      subject: `New contact form submission from ${formData.firstName} ${formData.lastName}`,
      text: `
        You have received a new message:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber || 'N/A'}
        Wedding Date: ${formData.weddingDate || 'N/A'}
        Wedding Venue: ${formData.weddingVenue || 'N/A'}
        Referral Source: ${formData.referralSource || 'N/A'}
        Message: ${formData.message || 'No message provided'}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    // Return the SentMessageInfo object with messageId
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};