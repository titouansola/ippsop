import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c42a73056e951a',
    pass: '02aeb321c5ee39',
  },
});
