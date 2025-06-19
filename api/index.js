const express = require("express");
const app = express();

const timezone = new Date().toTimeString();
app.get("/", (req, res) => res.send("Express on Vercel"+` with timezone ${timezone}`));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;