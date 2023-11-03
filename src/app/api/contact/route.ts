import { type NextRequest, NextResponse } from 'next/server';
import { sendContactMessageMail } from '@ippsop/lib/mail/contact-mail/send';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const { error } = await sendContactMessageMail(formData);
  if (error) {
    return new Response('Error', { status: 500 });
  }
  return NextResponse.json({});
}
