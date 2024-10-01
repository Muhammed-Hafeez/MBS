const { captureErr } = require("../../error/CatchAsyncErr");
const { validationResult } = require("express-validator");
const WebData = require("../../models/CMS");

exports.getSwiperImages = captureErr(async (req, res, next) => {
  // Retrieve the swiperdata array from the WebData document
  const data = await WebData.findOne({}, { swiperdata: 1 });

  // Check if data exists
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }

  res.status(200).json({
    success: true,
    data: data.swiperdata, // Return only the swiperdata array
  });
});

exports.addSwiperImage = captureErr(async (req, res, next) => {
  const { image, alt } = req.body;
  const validationresult = validationResult(req);
  if (!validationresult.isEmpty()) {
    res.status(400).json({ success: false, message: validationresult.array() });
    return;
  }
  // Generate a unique id for the new swiper image
  const newSwiperImage = {
    image,
    alt
  };

  // Push the new image to the swiperdata array
  const result = await WebData.updateOne(
    {},
    { $push: { swiperdata: newSwiperImage } }
  );

  if (result.modifiedCount === 0) {
    res.status(400).json({
      success: false,
      message: "Failed to add swiper image.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Swiper image added successfully.",
    });
  }
});

exports.patchSwiperImage = captureErr(async (req, res, next) => {
  const { id } = req.params; // Get the swiper image's id from the request params
  const { image, alt } = req.body;
  const validationresult = validationResult(req);
  if (!validationresult.isEmpty()) {
    res.status(400).json({ success: false, message: validationresult.array()[0] });
    return;
  }
  // Find and update the specific swiper image in the swiperdata array
  const result = await WebData.updateOne(
    { "swiperdata.id": id },
    {
      $set: {
        "swiperdata.$.image": image,
        "swiperdata.$.alt": alt,
      },
    }
  );

  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "Failed to update swiper image. ID not found.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Swiper image updated successfully.",
    });
  }
});

exports.deleteSwiperImage = captureErr(async (req, res, next) => {
  const { id } = req.params; // Get the swiper image's id from the request params

  // Remove the image from the swiperdata array
  const result = await WebData.updateOne({}, { $pull: { swiperdata: { id } } });

  if (result.modifiedCount === 0) {
    res.status(404).json({
      success: false,
      message: "Failed to delete swiper image. ID not found.",
    });
  } else {
    res.status(200).json({
      success: true,
      message: "Swiper image deleted successfully.",
    });
  }
});
