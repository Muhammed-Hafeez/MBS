const mongoose = require("mongoose");

// Define the schema for users
const userSchema = new mongoose.Schema({
  month: { type: Date, default: Date.now },
  users: {
    type: Number,
    required: true,
  },
  leads: {
    type: Number,
    required: true,
  },
});

// Define the schema for leads
const leadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // Email format validation
  },
  message: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
    min: 1000000000, // Minimum value for a 10-digit phone number
    max: 9999999999, // Maximum value for a 10-digit phone number
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
});

// Define the main schema named Analytics
const analyticsSchema = new mongoose.Schema({
  users: [userSchema],
  leads: [leadSchema],
});

// Create the model
module.exports = mongoose.model("analytics", analyticsSchema);
