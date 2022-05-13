// init project
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

const timeSchema = new Schema({
  unix: { type: Number, required: true },
  utc: { type: String, required: true },
});

const Time = mongoose.model("Time", timeSchema);

const createAndSaveTime = (done) => {
  let time = new Time({});
};

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {sd
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log(`Express delivery on: ${listener.address().port}`);
});


exports.TimeModel = Time;
exports.createAndSaveTime = createAndSaveTime;
