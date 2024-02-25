const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gmailMessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: [true, "Please add some messge here"],
  },
  companyType: {
    type: String,
    required: [true, "Please give a company type"],
    enum: [
      "Service-based",
      "Product-based",
      "Product-startups",
      "Initial-startups",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("GmailMessage", gmailMessageSchema);
