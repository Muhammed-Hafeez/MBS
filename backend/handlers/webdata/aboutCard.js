const { captureErr } = require("../../error/CatchAsyncErr");
const WebData = require("../../models/CMS");

const getAboutCard = captureErr(async (req, res, next) => {
  const data = await WebData.findOne({}, { aboutcarddata: 1 });
  res.status(200).json({ success: true, data: data.aboutcarddata });
});

const createAboutCard = captureErr(async (req, res, next) => {
  const { image, title, description } = req.body;
  const data = await WebData.updateOne(
    {},
    { $push: { aboutcarddata: { image, title, description } } }
  );
  res.status(200).json({ success: true, message: "your data has been sended" });
});

const patchAboutCard = captureErr(async (req, res, next) => {
  const { image, title, description } = req.body;
  const paramsId = req.params.id;
  const data = await WebData.updateOne(
    { "aboutcarddata.id": paramsId }, // Match the specific object in the array
    {
      $set: {
        "aboutcarddata.$.image": image, // Use the $ positional operator to target the matched object
        "aboutcarddata.$.title": title,
        "aboutcarddata.$.description": description,
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

const deleteAboutCard = captureErr(async (req, res, next) => {
  const paramsId = req.params.id;
  const result = await WebData.updateOne(
    {}, // Add a filter if needed to target a specific document
    { $pull: { aboutcarddata: { id: paramsId } } }
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
  getAboutCard,
  createAboutCard,
  patchAboutCard,
  deleteAboutCard,
};

/**
 * captureErr(async (req, res) => {
  const newWebData = new WebData({
    webdata: req.body.webdata, // Pass smallDescription, address, etc.
    teamdata: req.body.teamdata, // Array of team member data
    swiperdata: req.body.swiperdata, // Array of swiper data
    servicecarddata: req.body.servicecarddata, // Array of service card data
    projectsdata: req.body.projectsdata, // Array of projects data
    herodata: req.body.herodata, // Hero section data
    aboutcarddata: req.body.aboutcarddata, // Array of about card data
  });

  const savedData = await newWebData.save();
  res.status(201).json({ success: true, data: savedData });
});
 */
