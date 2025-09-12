/*
|--------------------------------------------------------------------------
| auth.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the protected routes for the server.
|
*/
const express = require("express");

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

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
