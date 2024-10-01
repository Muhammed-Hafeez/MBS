const { captureErr } = require("../../error/CatchAsyncErr");
const WebData = require("../../models/CMS");
const { validationResult } = require("express-validator");
exports.getHeroData = captureErr(async (req, res, next) => {
  const data = await WebData.findOne({}, { herodata: 1 });
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found.",
    });
  }
  res.status(200).json({ success: true, data: data.herodata });
});

exports.patchHeroData = captureErr(async (req, res, next) => {
  const { About, Services, Projects } = req.body;
  const reqResult = validationResult(req);
  if (!reqResult.isEmpty()) {
    return res
      .status(400)
      .json({ success: false, message: reqResult.array()[0].msg });
  }
  const newData = await WebData.updateOne(
    {},
    {
      $set: {
        "herodata.About": About,
        "herodata.Services": Services,
        "herodata.Projects": Projects,
      },
    }
  );
  if (newData.matchedCount === 0) {
    res.status(404).json({ success: false, message: "Data not found" });
    return;
  }
  res.status(200).json({
    success: true,
    message: "Your data has been updated",
    newData,
  });
});
