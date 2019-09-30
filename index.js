const handleRequest = require("./src/facebook.js");
const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3","item4"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/fbposts',(req,res) => {
    console.log("Received request for Facebook");
    handleRequest.handleRequest(res)
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
