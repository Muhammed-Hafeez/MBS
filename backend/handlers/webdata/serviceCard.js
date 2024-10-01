const { captureErr } = require("../../error/CatchAsyncErr");
const { validationResult } = require("express-validator");
const WebData = require("../../models/CMS");

const getServiceCard = captureErr(async (req, res, next) => {
  const data = await WebData.findOne({}, { servicecarddata: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.servicecarddata });
});

const createServiceCard = captureErr(async (req, res, next) => {
  const validationresult = validationResult(req);
  if (!validationresult.isEmpty()) {
    res.status(400).json({ success: false, message: validationresult.array()});
    return;
  }
  const { heading, body, icon, Home } = req.body;

  const newCardData = icon
    ? { heading, body, icon, Home }
    : { heading, body, Home };
  const result = await WebData.updateOne({
    $push: { servicecarddata: newCardData },
  });

  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "something went wrong Item was not created",
    });
  } else {
    res.status(200).json({
      success: false,
      message: "Item created successfully.",
    });
  }
});

const patchServiceCard = captureErr(async (req, res, next) => {
  const { heading, body, icon, Home } = req.body;
  const paramsId = req.params.id;
  console.log(paramsId);
  const data = await WebData.updateOne(
    { "servicecarddata.id": paramsId }, // Match the specific object in the array
    {
      $set: {
        "servicecarddata.$.heading": heading, // Use the $ positional operator to target the matched object
        "servicecarddata.$.body": body,
        "servicecarddata.$.Home": Home,
        "servicecarddata.$.icon": icon,
      },
    }
  );

  if (data.matchedCount === 0) {
    res.status(404).json({ success: false, message: "Data not found" });
    return;
  }
  res.status(200).json({
    success: true,
    message: "Your data has been updated",
    data,
  });
});

const deleteServiceCard = captureErr(async (req, res, next) => {
  const paramsId = req.params.id;
  const result = await WebData.updateOne(
    {}, // Add a filter if needed to target a specific document
    { $pull: { servicecarddata: { id: paramsId } } }
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
module.exports = {
  getServiceCard,
  createServiceCard,
  patchServiceCard,
  deleteServiceCard,
};
