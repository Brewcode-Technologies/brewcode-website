import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define response data shape
interface ApiResponse {
  success: boolean;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, mobile, message } = req.body as {
    name: string;
    email: string;
    mobile: string;
    message: string;
  };

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.AWS_SES_ACCESS_KEY,
        pass: process.env.AWS_SES_SECRET_KEY,
      },
    });

    await transporter.sendMail({
      from: process.env.AWS_SES_SENDER || 'no-reply@yourdomain.com', // Must be a verified sender in AWS SES
      to: process.env.AWS_SES_RECIPIENT || 'contact@brewcode.co', // Your receiving email
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email send error:', error);
    return res.status(500).json({ success: false, message: `Failed to send email: ${error.message || 'Unknown error'}` });
  }
}