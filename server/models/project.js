const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  date: String,
  views: Number,
  imageLink: String,
  shortDes: String,
  longDes: String,
  playable: Boolean,
  link: String,
  gitHubLink: String,
});

// compile model from schema
module.exports = mongoose.model("project", ProjectSchema);
