'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export interface Attachment {
  content: string;
  filename: string;
}

export const sendEmail = async (
  from: string,
  to: string | string[],
  subject: string,
  htmlBody: string,
  attachments?: Attachment[]
) => {
  console.log('env', process.env.NEXT_PUBLIC_RESEND_API_KEY);
  await resend.emails.send({
    from: from,
    to: to,
    subject: subject,
    html: htmlBody,
    attachments: attachments,
  });
};
