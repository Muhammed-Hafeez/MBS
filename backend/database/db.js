const mongoose = require("mongoose");
// mongodb+srv://hafeez97418:p1u2b3g4Mongo@myfirstcluster.rus7nnu.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstCluster
const uri =
  "mongodb://127.0.0.1:27017/MBS";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
const connectDatabase = async () => {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("database Connected");
    // await mongoose.connection.db.admin().command({ ping: 1 });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDatabase;
