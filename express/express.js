//const processEnv = require("../src/processEnv");
const handleRequest = require("./facebook.js");
//const email = require("../src/email.js");
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const config = require("./configWrapper");
const router = express.Router();

//.log("Is Dev Mode?: ", processEnv.isDev());
// Log entries
console.log("-------");
Object.entries(config).forEach((entry) =>
  console.log(entry[0] + " -> " + entry[1])
);
console.log("-------");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.get("/fbposts", (req, res) => {
  console.log("Received request for Facebook");
  handleRequest
    .handleRequest(res)
    .then(() => res.end())
    .catch(() => res.end());
});

router.post("/emailSubmit", (req, res) => {
  // console.log("Received request for email");
  // const body = req.body;
  // email
  //  .handleEmailRequest(res, req.body)
  //  .then(() => res.end())
  //  .catch(() => res.end());
});

// Handles any requests that don't match the ones above
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use("/.netlify/functions/express", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
