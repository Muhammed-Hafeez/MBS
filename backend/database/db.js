const mongoose = require("mongoose");
const uri =
  process.env.MODE === "development"
    ? "mongodb://127.0.0.1:27017/MBS"
    : process.env.MONGODB_URI;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
const connectDatabase = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("database Connected");
    return
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
