const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  number: Number,
  date: Date,
});

// compile model from schema
module.exports = mongoose.model("visitor", VisitorSchema);
