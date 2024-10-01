const { captureErr } = require("../../error/CatchAsyncErr");
const { validationResult } = require("express-validator");
const WebData = require("../../models/CMS");

exports.getProjectCard = captureErr(async (req, res, next) => {
  const data = await WebData.findOne({}, { projectsdata: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.projectsdata });
});
exports.createProjectCard = captureErr(async (req, res, next) => {
  const { image, title, description, details } = req.body;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json({ success: false, message: result.array()[0].msg});
    return;
  }
  await WebData.updateOne(
    {},
    { $push: { projectsdata: { image, title, description, details } } }
  );
  res.status(200).json({
    success: true,
    message: "Your data has been uploaded",
  });
});

exports.patchProjectCard = captureErr(async (req, res, next) => {
  const paramsId = req.params.id;
  const { image, title, description, details } = req.body;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json({ success: false, message: result.array()[0].msg});
    return;
  }
  const data = await WebData.updateOne(
    { "projectsdata.id": paramsId },
    {
      $set: {
        "projectsdata.$.image": image,
        "projectsdata.$.title": title,
        "projectsdata.$.description": description,
        "projectsdata.$.description": details,
      },
    }
  );
  if (data.modifiedCount === 0) {
    res.status(400).json({ success: false, message: "data was the same" });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Your data has been updated",
    data,
  });
});

exports.deleteProjectCard = captureErr(async (req, res, next) => {
  const paramsId = req.params.id;
  const result = await WebData.updateOne(
    {}, // Add a filter if needed to target a specific document
    { $pull: { projectsdata: { id: paramsId } } }
  );
  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "No matching item found to delete.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Item deleted successfully.",
    });
  }
});
