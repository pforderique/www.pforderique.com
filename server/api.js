/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for the server.
|
*/
const Experiences = require("./data/experiences.json");
const Profile = require("./data/profile.json");
const Skills = require("./data/skills.json");
const Visitors = require("./data/visitors.json");
const Projects = require("./data/projects.json");
const express = require("express");

// api endpoints:
const router = express.Router();

// API methods here
router.get("/profile", (req, res) => {
  res.send(Profile);
});

router.get("/project", (req, res) => {
  // Project.findById(req.query.projectid, (err, project) => {
  //   if (err) res.send(err);
  //   else {
  //     project.views += 1;
  //     project.save().then((p) => res.send(p));
  //   }
  // });
  console.log(`Looking for project with id ${req.query.projectid}`);
  const project = Projects.find((p) => p.id === Number(req.query.projectid));
  if (project) {
    project.views += 1;
    res.send(project);
  } else {
    res.status(404).send({ msg: "Project not found" });
  }
});

router.get("/projects", (req, res) => {
  let filteredProjects = Projects;
  if (req.query.q && req.query.q.length > 0) {
    const q = req.query.q.toLowerCase();
    filteredProjects = Projects.filter((project) =>
      project.title.toLowerCase().includes(q) ||
      (project.description && project.description.toLowerCase().includes(q)) ||
      (project.technologies &&
        project.technologies.some((tech) => tech.toLowerCase().includes(q)))
    );
  }
  filteredProjects = filteredProjects.slice(0, 20);
  filteredProjects.sort((a, b) => b.views - a.views);
  return res.send(filteredProjects);
});

router.get("/experiences", (req, res) => {
  Experiences.sort((a, b) => new Date(b.recency) - new Date(a.recency));
  res.send(Experiences);
});

router.get("/skills", (req, res) => {
  Skills.sort((a, b) => b.importance - a.importance);
  const query = req.query.type ? req.query.type : null;
  if (query) {
    const filteredSkills = Skills.filter((skill) =>
      skill.type && skill.type.toLowerCase().includes(query.toLowerCase())
    );
    return res.send(filteredSkills);
  }
  res.send(Skills);
});

router.get("/visitor", (req, res) => {
  const numVisitors = Visitors.length;
  
  const newvisitor = {
    number: numVisitors + 1,
    date: new Date()
  };
  Visitors.push(newvisitor);
  // TODO: fix.
  // fs.writeFile(
  //   "./server/data/visitors.json",
  //   JSON.stringify(Visitors, null, 2),
  //   (err) => {
  //     if (err) {
  //       console.error("Error writing visitors.json:", err);
  //       return res.status(500).send({ error: "Failed to save visitor record." });
  //     }
  //     res.send(newvisitor);
  //   }
  // )
  res.send(newvisitor);
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
