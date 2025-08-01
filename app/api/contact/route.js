import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { from_name, from_email, subject, message } = body;

  if (!from_name || !from_email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pramaray300306@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${from_name}" <${from_email}>`,
      to: 'pramaray300306@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `
New message from contact form:

Name: ${from_name}
Email: ${from_email}
Subject: ${subject}

Message:
${message}
      `,
    });

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
    });
  }
}

