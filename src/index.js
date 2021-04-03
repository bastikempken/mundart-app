const express = require("express");
const app = express();
const serverless = require('serverless-http');


const PORT = 8000;

app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


app.get("/", (req, res) => res.render("home"));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});


module.exports.handler = serverless(app);