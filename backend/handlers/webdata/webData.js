const { captureErr } = require("../../error/CatchAsyncErr");
const { validationResult } = require("express-validator");
const WebDataSchema = require("../../models/CMS"); //to avoid confusion i have edited the name

exports.getWebData = captureErr(async (req, res, next) => {
  const data = await WebDataSchema.findOne({}, { webdata: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.webdata });
});

exports.patchWebData = captureErr(async (req, res, next) => {
  const {
    smallDescription,
    addressInWords,
    addressForMaps,
    addressForLink,
    email,
    phoneNo,
    timings,
    socialMedia,
  } = req.body;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).json({ success: false, message: result.array()[0].msg });
    return;
  }
  const data = await WebDataSchema.updateOne(
    {},
    {
      $set: {
        webdata: {
          smallDescription,
          addressInWords,
          addressForMaps,
          addressForLink,
          email,
          phoneNo,
          timings,
          socialMedia,
        },
      },
    }
  );
  if (data.matchedCount === 0) {
    res.status(404).json({ success: false, message: "Data not found" });
    return;
  }
  res.status(200).json({ success: true, message: "your data has been sended" });
});
