const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String, // (ex: Piero Orderique)
  header: String, // (ex: CS Gates Scholar at MIT)
  bio: String,
  aboutmes: [String],
  github: String,
  linkedin: String,
  instagram: String,
  facebook: String,
  email: String,
});

// compile model from schema
module.exports = mongoose.model("profile", ProfileSchema);
