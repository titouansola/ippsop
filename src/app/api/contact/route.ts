import { sendContactMessageMail } from '@ippsop/lib/mail/contact-mail/send';

export async function POST(req: Request) {
  const formData = await req.formData();
  const { error } = await sendContactMessageMail(formData);
  if (error) {
    return Response.error();
  }
  return Response.json({ ok: true });
}
