const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your last name"],
  },
  title: {
    type: String,
    required: [true, "Please tell us your title"],
  },
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
  savedData: [
    {
      company: String,
      experience: Number,
      role: String,
      skills: [
        {
          type: String
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
