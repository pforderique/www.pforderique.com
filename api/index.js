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
const path = require("path"); // provide utilities for working with file and directory paths

const api = require("../server/api");
const auth = require("../server/auth");

// create a new express server
const app = express();

// allow us to process POST requests
app.use(express.json());

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
