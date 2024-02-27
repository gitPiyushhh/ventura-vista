const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "All posts should have a title"],
  },
  description: {
    type: String,
    required: [true, "All posts should have a description"],
  },
  domain: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleDateString()
  },
});

module.exports = mongoose.model("Post", postSchema);
