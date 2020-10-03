const isDev = process.env.DEV === "true";
//const config = isDev ? require("../config") : null;
const config = null;

const fbToken = (config ? config : process.env).fb_token;
const mailHost = (config ? config : process.env).mail_host;
const mailPort = (config ? config : process.env).mail_port;
const mailUsername = (config ? config : process.env).mail_username;
const mailPassword = (config ? config : process.env).mail_password;
const praxisAddress = (config ? config : process.env).praxis_address;
const praxisServiceAddress = (config ? config : process.env)
  .praxis_service_address;

module.exports = {
  fbToken,
  mailHost,
  mailPort,
  mailUsername,
  mailPassword,
  praxisAddress,
  praxisServiceAddress,
};
