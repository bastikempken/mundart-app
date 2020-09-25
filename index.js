const app = require("./src/express/express");

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Local app listening on port ${port}!`));
