/*
|-----------------------------------------
| server.js
|-----------------------------------------
| Setup and configuration for the server
*/

require("dotenv").config();

//import libraries needed for the webserver to work!
const http = require("http");
const express = require("express"); // backend framework for our node server.
const session = require("express-session"); // library that stores info about each connected user
const mongoose = require("mongoose"); // library to connect to MongoDB
const path = require("path"); // provide utilities for working with file and directory paths

const api = require("../server/api");
const auth = require("../server/auth");

// Server configuration below
const mongoConnectionURL = process.env.mongoConnectionURL;
const databaseName = process.env.databaseName;

// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
    useFindAndModify: false, // useFindAndModify is deprecated
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

// create a new express server
const app = express();

// allow us to process POST requests
app.use(express.json());

// set up a session, which will persist login data across requests
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// connect api routes
app.use("/api", api);
app.use("/auth", auth);

// load the compiled react files, which will serve /index.html and /bundle.js
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

// for all other routes, render index.html and let react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  // Internal Server Error
  if (status === 500) {
    console.log("The server errored when processing a request!");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

const port = process.env.PORT || 3000;

const server = http.Server(app);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
