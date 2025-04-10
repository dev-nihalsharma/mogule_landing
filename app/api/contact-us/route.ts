'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export interface Attachment {
  content: string;
  filename: string;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { from, to, subject, htmlBody, attachments } = body;
  console.log('body', from);

  await resend.emails.send({
    from: from,
    to: [to],
    subject: subject,
    html: htmlBody,
    attachments: attachments,
  });

  return new Response('Email sent successfully', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
