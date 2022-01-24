/*
|--------------------------------------------------------------------------
| auth.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the protected routes for the server.
|
*/
const express = require("express");
const mongoose = require("mongoose");

// model imports here
const Experience = require("./models/experience");
const Profile = require("./models/profile");
const Project = require("./models/project");
const Skill = require("./models/skill");

// auth endpoints:
const router = express.Router();

// first definition: check auth
router.use((req, res, next) => {
  const cred =
    JSON.stringify(req.query) !== "{}" ? req.query.cred : req.body.cred;
  if (cred && cred === process.env.CRED) {
    next();
  } else {
    // not authorized
    res.status(401).send("Not authorized");
    // or maybe just res.redirect("/login");
  }
});

router.get("/hello", (req, res) => res.send("hello!"));

// auth methods here
router.post("/project", (req, res) => {
  const project = new Project({
    title: req.body.title,
    date: req.body.date,
    views: req.body.views ? Number(req.body.views) : 0,
    driveid: req.body.driveid,
    shortDes: req.body.shortDes,
    longDes: req.body.longDes,
    playable: req.body.playable ? Boolean(req.body.playable) : false,
    link: req.body.link,
    github: req.body.githubLink ? req.body.githubLink : null,
  });
  project.save().then((p) => res.send(p));
});

router.post("/experience", (req, res) => {
  const links = req.body.links ? req.body.links : [];
  const linksDes = req.body.linksDes ? req.body.linksDes : [];

  const exp = new Experience({
    jobtitle: req.body.jobtitle,
    company: req.body.company,
    location: req.body.location,
    date: req.body.date,
    description: req.body.description,
    links: links,
    linksDes: linksDes,
    bullets: req.body.bullets,
  });
  exp.save().then((e) => res.send(e));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
