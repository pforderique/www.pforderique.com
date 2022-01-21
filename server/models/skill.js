const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  type: String, // progrmaming, technologies, certificates, courses
  importance: Number,
});

// compile model from schema
module.exports = mongoose.model("skill", SkillSchema);
