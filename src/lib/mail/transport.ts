import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const config: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const transport = nodemailer.createTransport(config);
