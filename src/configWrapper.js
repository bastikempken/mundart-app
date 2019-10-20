const config = require("../config");
const isDev = process.env.DEV === "true";

const fbToken = config.fb_token;
const mailHost = config.mail_host;
const mailPort = config.mail_port;
const mailUsername = config.mail_username;
const mailPassword = config.mail_password;
const praxisAddress = isDev ? config.dev.praxis_address : config.praxis_address;
const praxisServiceAddress = config.praxis_service_address;

module.exports = {
  fbToken,
  mailHost,
  mailPort,
  mailUsername,
  mailPassword,
  praxisAddress,
  praxisServiceAddress
};
