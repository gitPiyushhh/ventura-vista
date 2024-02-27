const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coverLetterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: [true, "Please add some messge here"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("CoverLetter", coverLetterSchema);
