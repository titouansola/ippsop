import { transport } from '@ippsop/lib/mail/transport';

export async function sendContactMessageMail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    console.error('Malformed request.');
    return { error: true };
  }

  try {
    await transport.sendMail({
      from: process.env.SMTP_USERNAME,
      to: process.env.MAIL_TO,
      subject: 'Vous avez reçu un nouveau un nouveau message depuis ippsop.fr',
      text: buildEmailContent(name, email, message),
      html: buildHtmlEmail(name, email, message),
    });
  } catch (e) {
    console.error(e);
    return { error: true };
  }
  return { error: false };
}

export function buildEmailContent(
  name: string,
  email: string,
  message: string
) {
  return `Nouveau message reçu depuis le formulaire de contact ippsop.fr.Prénom nom: ${name} E-mail: ${email} Message: ${message}`;
}

export function buildHtmlEmail(name: string, email: string, message: string) {
  return `
<div style="font-family: sans-serif">
    <p style="margin: 0 0 16px 0">Nouveau message reçu depuis le formulaire de contact ippsop.fr.</p>
    <p>
        <b>Prénom / Nom:</b> ${name}
    </p>
    <p>
        <b>E-mail:</b> <a href="mailto:${email}">${email}</a><br/>
    </p>
    <p>
        <b>Message:</b>
    </p>
    <p style="padding-left: 12px;border-left: 1px solid grey">
        ${message.replace(/\r\n/g, '<br/>')}
    </p>
</div>
`;
}
