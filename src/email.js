const nodemailer = require("nodemailer");
const config = require("./configWrapper");
const Email = require("./email-dto.js").Email;

const createTransporter = () =>
  nodemailer.createTransport({
    port: config.mailPort,
    host: config.mailHost,
    auth: {
      user: config.mailUsername,
      pass: config.mailPassword
    }
  });

const sendEmail = async json => {
  try {
    const transporter = createTransporter();
    const optionsToPraxis = sendToPraxis(json);
    await transporter.sendMail(optionsToPraxis);
    console.log("SUCCESS > Email To Praxis");
    const optionsToCustomer = sendToCustomer(json);
    await transporter.sendMail(optionsToCustomer);
    console.log("SUCCESS > Email To Customer");
  } catch (error) {
    console.log("ERROR send email", error);
  }
};

const sendToPraxis = data => {
  const email = new Email.Builder()
    .from(config.praxisServiceAddress)
    .to(config.praxisAddress)
    .replyTo(data.sender)
    .subject("Kontaktanfrage von " + data.name)
    .content(data.content)
    .build();
  return mapEmailToOptions(email);
};

const sendToCustomer = data => {
  const email = new Email.Builder()
    .from(config.praxisServiceAddress)
    .to(data.sender)
    .replyTo(null)
    .subject("Bestätigung Ihrer Kontaktanfrage auf mundart-sprachtherapie.de")
    .content(
      "Hallo " +
        data.name +
        ",\n\nvielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.\nIn dringenden Fällen erreichen Sie uns auch telefonisch unter: +491777435491.\n" +
        "\n\nMit freundlichen Grüßen\nIhr mundart-Team" +
        "\n\nUrsprüngliche Nachricht:\n\n" +
        data.content
    )
    .build();
  return mapEmailToOptions(email);
};

const mapEmailToOptions = email => {
  return {
    from: email.from,
    to: email.to,
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.content
  };
};

module.exports.handleEmailRequest = async (res, data) => {
  try {
    sendEmail(data);
    res.write(200);
  } catch (error) {
    res.write(400);
  }
};
