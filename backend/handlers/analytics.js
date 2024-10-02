const { captureErr } = require("../error/CatchAsyncErr");
const AnalyticsSchema = require("../models/Analytics");
const { validationResult } = require("express-validator");
const Utils = require("../utils/utils");

const util = new Utils();

exports.createLead = captureErr(async (req, res, next) => {
  const newLead = req.body;

  // Validate the input
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res
      .status(400)
      .json({ success: false, message: result.array()[0].msg });
  }

  // Use findOneAndUpdate to update or insert a new lead in a single query
  const currentDate = new Date();
  const filter = {}; // Replace with specific filter criteria if necessary
  const update = {
    $setOnInsert: { users: [] }, // Ensure users array exists if it doesn't already
    $push: { leads: newLead }, // Push new lead
  };

  const options = { new: true, upsert: true }; // Return the updated document and create if doesn't exist

  const updatedData = await AnalyticsSchema.findOneAndUpdate(
    filter,
    update,
    options
  );

  // Update the user data if the month is the same or push a new entry
  let monthUpdated = false;

  updatedData.users.forEach((user) => {
    if (util.ifSameMonth(user.month, currentDate)) {
      user.leads += 1;
      monthUpdated = true;
    }
  });

  // If no matching month, push a new user data entry for the current month
  if (!monthUpdated) {
    updatedData.users.push({
      month: currentDate,
      users: 1,
      leads: 1,
    });
  }

  // Save the changes to the document
  await updatedData.save();

  return res
    .status(200)
    .json({ success: true, message: "Your data has been sent. Thank you!" });
});

exports.getLeads = captureErr(async (req, res, next) => {
  const data = await AnalyticsSchema.findOne({}, { leads: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.leads });
});

exports.deleteLead = captureErr(async (req, res, next) => {
  const paramsId = req.params.id;
  let updateResult = await AnalyticsSchema.findOneAndUpdate(
    {},
    { $pull: { leads: { id: paramsId } } }, // Remove the lead with the matching id
    { new: true } // Return the updated document
  );
  res
    .status(200)
    .json({ success: true, message: "Your lead was deleted successfully" });
});

exports.getUsers = captureErr(async (req, res, next) => {
  const data = await AnalyticsSchema.findOne({}, { users: 1 });
  let usersArray = data.users;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  const updatedUsersArray = usersArray.map((obj) => {
    return {
      month: util.convertDateString(obj.month),
      users: obj.users,
      leads: obj.leads,
    };
  });
  res.status(200).json({ success: true, data: updatedUsersArray });
});

