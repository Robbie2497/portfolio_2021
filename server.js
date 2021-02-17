const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Feedback = require("./Models/feedback");
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/feedback.js"));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {

  // change public back to build before deploying
  app.use(express.static("client/public"));
}

app.get("/", (req, res) => {
  // Handle root
  res.sendFile(path.join(__dirname, "./clent/public/index.html"));
});


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

mongoose.connection.once('open', function () {
  console.log('Connection to database has been made...');
  }).on('error', function (error) {
  console.log('Connection Error' + error);
  });


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {

  // change public back to build before deploying
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});