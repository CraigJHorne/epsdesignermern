const mongoose = require("mongoose");

const garmentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  initials: {
    type: String,
  },
  spec: {
    type: String,
  },
  fabric1: {
    type: String,
  },
  fabric2: {
    type: String,
  },
  info1: {
    type: String,
  },
  info2: {
    type: String,
  },
  info3: {
    type: String,
  },
  info4: {
    type: String,
  },
  subOrCS: {
    type: String,
  },
  sleeveoptions: {
    type: Array,
  },
});

const Garments = mongoose.model("Garments", garmentSchema);

module.exports = Garments;
