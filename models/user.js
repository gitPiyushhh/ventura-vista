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
  postsCreated: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
});

module.exports = mongoose.model("User", userSchema);
