const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please give us your email"],
  },
  password: {
    type: String,
    required: [true, "Please create a password"],
  },
  coverLetter: {
    type: Schema.Types.ObjectId,
    ref: "CoverLetter"
  },
  gmailMessage: {
    type: Schema.Types.ObjectId,
    ref: "GmailMessage"
  },
  messageToRecruiter: {
    type: Schema.Types.ObjectId,
    ref: "RecruiterMessage"
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
