/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for the server.
|
*/
const express = require("express");
const mongoose = require("mongoose");

// model imports here
const Experience = require("./models/experience");
const Project = require("./models/project");

// api endpoints:
const router = express.Router();

// API methods here
router.get("/projects", (req, res) => {
  if (!req.query.q) req.query.q = "";
  const query = { title: { $regex: ".*" + req.query.q + ".*", $options: "i" } };
  Project.find(query)
    .limit(20)
    .then((results) => res.send(results));
});

router.get("/experiences", (req, res) => {
  Experience.find({}).then((results) => res.send(results));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;