// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// Date endpoint
app.get("/api/:date?", (req, res) => {
  const { date } = req.params;
  let unixDate = Math.floor(new Date().getTime() / 1000);
  let utcDate = new Date();

  res.json({
    unix: unixDate,
    utc: utcDate,
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Express delivery on: ${listener.address().port}!`);
});
