import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
      user: "50477523d758c5",
      pass: "58ca3b90fea2d1"
   }
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Sanmir Cruz <sancruz.dev@gmail.com>',
         subject,
         html: body,
      });
   };
}






