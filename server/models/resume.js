const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tag: {
    type: String,
    default: "Generalised"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("CoverLetter", resumeSchema);
