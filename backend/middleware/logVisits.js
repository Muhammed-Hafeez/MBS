const { captureErr } = require("../error/CatchAsyncErr");
const AnalyticsSchema = require("../models/Analytics");
const Utils = require("../utils/utils");
const { v4: uuidv4 } = require("uuid"); // UUID library to generate unique IDs
const util = new Utils();
exports.trackVisit = captureErr(async (req, res, next) => {
  let visitorId = req.cookies.visitorId;
  if (visitorId) return next();
  const currentDate = new Date();
  const updatedData = await AnalyticsSchema.findOne({}, { users: 1 });
  // Update the user data if the month is the same or push a new entry
  let monthUpdated = false;

  updatedData.users.forEach((user) => {
    if (util.ifSameMonth(user.month, currentDate)) {
      user.users += 1;
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
  await updatedData.save();
  visitorId = uuidv4(); // Generate a new unique ID for the visitor
  res.cookie("visitorId", visitorId, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  return next();
});
