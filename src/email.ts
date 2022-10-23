import nodemailer from "nodemailer";
import { Email } from "./email-dto";

interface EmailRequest {
  name: string;
  sender: string;
  content: string;
}

interface EmailOptions {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}

const createTransporter = () =>
  nodemailer.createTransport({
    port: process.env.mail_port,
    host: process.env.mail_host,
    secure: true,
    auth: {
      user: process.env.mail_username,
      pass: process.env.mail_password,
    },
  });

export const sendEmail = async (emailRequest: EmailRequest): Promise<void> => {
  try {
    const transporter = createTransporter();
    const optionsToPraxis = sendToPraxis(emailRequest);
    let statusEmailToPraxis = await transporter.sendMail(optionsToPraxis);
    console.log("Message sent: %s", statusEmailToPraxis.messageId)
    const optionsToCustomer = sendToCustomer(emailRequest);
    let statusEmailToCustomer = await transporter.sendMail(optionsToCustomer);
    console.log("Message sent: %s", statusEmailToCustomer.messageId)
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const sendToPraxis = (emailRequest: EmailRequest): EmailOptions => {
  const email: Email = Email.Builder.from(process.env.praxis_service_address)
    .to(process.env.praxis_address)
    .replyTo(emailRequest.sender)
    .subject("Kontaktanfrage von " + emailRequest.name)
    .content(emailRequest.content)
    .build();
  return mapEmailToOptions(email);
};

const sendToCustomer = (emailRequest: EmailRequest): EmailOptions => {
  const email: Email = Email.Builder.from(process.env.praxis_service_address)
    .to(emailRequest.sender)
    .replyTo(null)
    .subject("Bestätigung Ihrer Kontaktanfrage auf mundart-sprachtherapie.de")
    .content(
      "Hallo " +
        emailRequest.name +
        ",\n\nvielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.\nIn dringenden Fällen erreichen Sie uns auch telefonisch unter: +491777435491.\n" +
        "\n\nMit freundlichen Grüßen\nIhr mundart-Team" +
        "\n\nUrsprüngliche Nachricht:\n\n" +
        emailRequest.content
    )
    .build();
  return mapEmailToOptions(email);
};

const mapEmailToOptions = (email: Email): EmailOptions => {
  return {
    from: email.from,
    to: email.to,
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.content,
  };
};
