const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  driveid: String,
  date: Date,
});

// compile model from schema
module.exports = mongoose.model("resume", ResumeSchema);
