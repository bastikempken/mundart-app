const processEnv = require("./src/processEnv");
const handleRequest = require("./src/facebook.js");
const email = require("./src/email.js");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const config = require('./src/configWrapper');

console.log('Is Dev Mode?: ',processEnv.isDev());
// Log entries
console.log('-------');
Object.entries(config).forEach(entry => console.log(entry[0] + ' -> ' + entry[1]) );
console.log('-------');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/fbposts',(req,res) => {
    console.log("Received request for Facebook");
    handleRequest.handleRequest(res)
        .then(()=> res.end())
        .catch(()=>res.end())
});

app.post('/emailSubmit',(req,res) => {
    console.log("Received request for email");
    const body = req.body;
    email.handleEmailRequest(res,req.body)
        .then(()=> res.end())
        .catch(()=>res.end())
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);
