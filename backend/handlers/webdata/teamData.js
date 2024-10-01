const { captureErr } = require("../../error/CatchAsyncErr");
const { validationResult } = require("express-validator");
const WebData = require("../../models/CMS");
exports.getTeamMember = captureErr(async (req, res, next) => {
  const data = await WebData.findOne({}, { teamdata: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.teamdata });
});
//
exports.addTeamMember = captureErr(async (req, res, next) => {
  const { src, alt, name } = req.body;
  const resulterr = validationResult(req);
  if (!resulterr.isEmpty()) {
    res.status(400).json({ success: false, message: resulterr.array()[0].msg});
    return;
  }
  // Generate a unique id for the new team member
  const newTeamMember = {
    src,
    alt,
    name,
  };

  // Push the new member to the teamdata array
  const result = await WebData.updateOne(
    {},
    { $push: { teamdata: newTeamMember } }
  );

  if (result.modifiedCount === 0) {
    res.status(400).json({
      success: false,
      message: "Failed to add team member.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Team member added successfully.",
    });
  }
});

//
exports.patchTeamMember = captureErr(async (req, res, next) => {
  const { id } = req.params; // Get the team member's id from the request params
  const { src, alt, name } = req.body;
  const resulterr = validationResult(req);
  if (!resulterr.isEmpty()) {
    res.status(400).json({ success: false, message: resulterr.array()[0].msg});
    return;
  }
  // Find and update the specific team member in the teamdata array
  const result = await WebData.updateOne(
    { "teamdata.id": id },
    {
      $set: {
        "teamdata.$.src": src,
        "teamdata.$.alt": alt,
        "teamdata.$.name": name,
      },
    }
  );

  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "Failed to update team member. ID not found.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Team member updated successfully.",
    });
  }
});

//
exports.deleteTeamMember = captureErr(async (req, res, next) => {
  const { id } = req.params; // Get the team member's id from the request params

  // Remove the member from the teamdata array
  const result = await WebData.updateOne({}, { $pull: { teamdata: { id } } });

  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "Failed to delete team member. ID not found.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Team member deleted successfully.",
    });
  }
});
