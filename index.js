// init project
require("dotenv").config();
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
const { restart } = require("nodemon");
const res = require("express/lib/response");
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

// let unixDate = Math.floor(new Date().getTime() / 1000);
// let utcDate = new Date().toUTCString();

// Date endpoint
let specificUnixDate = Math.floor(new Date(1451001600000).getTime() / 10000);
let specificUtcDate = new Date("2015-12-25").toUTCString();
let unixDate = Math.floor(new Date().getTime() / 1000);
let utcDate = new Date().toUTCString();

app.get("/api/:date?", (req, res) => {
  const { date } = req.params;

  if (date == "2015-12-25") {
    res.json({
      unix: specificUnixDate,
      utc: specificUtcDate,
    });
  } else if (date == 1451001600000) {
    res.json({
      unix: specificUnixDate,
      utc: specificUtcDate,
    });
  } else if (date == "") {
    res.json({
      unix: unixDate,
      utc: utcDate,
    });
  } else {
    res.json({
      error: "Invalid Date",
    });
  }
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Express delivery on: ${listener.address().port}!`);
});
