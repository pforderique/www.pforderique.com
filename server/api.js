/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for the server.
|
*/
const express = require("express");

// model imports here
const Experience = require("./models/experience");
const Profile = require("./models/profile");
const Project = require("./models/project");
const Skill = require("./models/skill");
const Visitor = require("./models/visitor");

// api endpoints:
const router = express.Router();

// API methods here
router.get("/profile", (req, res) => {
  Profile.findOne({}).then((profile) => res.send(profile));
});

router.get("/project", (req, res) => {
  Project.findById(req.query.projectid, (err, project) => {
    if (err) res.send(err);
    else {
      project.views += 1;
      project.save().then((p) => res.send(p));
    }
  });
});

router.get("/projects", (req, res) => {
  if (!req.query.q) req.query.q = "";
  const query = { title: { $regex: ".*" + req.query.q + ".*", $options: "i" } };
  Project.find(query)
    .limit(20)
    .sort({ views: -1 })
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

router.get("/visitor", (req, res) => {
  Visitor.findOne({})
    .sort({ number: -1 })
    .then((visitor) => {
      const newvisitor = new Visitor({
        number: visitor.number + 1,
        date: Date.now(),
      });

      newvisitor.save().then((v) => res.send(v));
    });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
