function captureErr(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
function handleErrors(err, req, res, next) {
  switch (err.name) {
    case "CastError":
      res.status(400).json({
        success: false,
        error: err.message,
      });
      break;

    default:
      console.log(err.stack);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err.message,
      });
      break;
  }
}

module.exports = { captureErr, handleErrors };
