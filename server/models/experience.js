const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  jobtitle: String,
  company: String,
  location: String,
  date: String,
  recency: Number,
  description: String,
  links: [String], // (if any)
  linksDes: [String],
  bullets: [String],
});

// compile model from schema
module.exports = mongoose.model("experience", ExperienceSchema);
