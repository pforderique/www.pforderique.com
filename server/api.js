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
const Profile = require("./models/profile");
const Project = require("./models/project");
const Skill = require("./models/skill");

// api endpoints:
const router = express.Router();

// API methods here
router.get("/profile", (req, res) => {
  Profile.findOne({}).then((profile) => res.send(profile));
});

router.get("/projects", (req, res) => {
  if (!req.query.q) req.query.q = "";
  const query = { title: { $regex: ".*" + req.query.q + ".*", $options: "i" } };
  Project.find(query)
    .limit(20)
    .then((results) => res.send(results));
});

router.get("/experiences", (req, res) => {
  Experience.find({})
    .sort({ recency: -1 })
    .then((results) => res.send(results));
});

router.get("/skills", (req, res) => {
  const query = req.query.type ? { type: req.query.type } : {};
  Skill.find(query)
    .sort({ importance: -1 })
    .then((skills) => res.send(skills));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
