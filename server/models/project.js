const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  date: String,
  views: Number,
  driveid: String, // the id given by google drive when shared
  shortDes: String,
  longDes: String,
  playable: Boolean,
  link: String,
  github: String,
});

// compile model from schema
module.exports = mongoose.model("project", ProjectSchema);
