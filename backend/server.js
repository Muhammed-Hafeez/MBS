const express = require("express");
require("dotenv").config();
const path = require("path");
const connectDatabase = require("./database/db");
const cookieParser = require("cookie-parser");
const { handleErrors } = require("./error/CatchAsyncErr");
//routers
const { authRouter } = require("./routes/auth.routes");
const cmsRouter = require("./routes/webdata.routes");
const AnalyticsRouter = require("./routes/analytics.routes");
const { trackVisit } = require("./middleware/logVisits");

const app = express();

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, "..", "public"))); // Adjust path if needed
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRouter);
app.use("/api/cms", cmsRouter);
app.use("/api/analytics", AnalyticsRouter);
app.use(handleErrors);
app.use("/", trackVisit);
// API routes (if any)
// You can add routes for APIs here if needed, or handle them in another file

// Catch-all handler for routes to serve React app

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

connectDatabase();

if (process.env.MODE === "development") {
  app.listen(80, () => {
    console.log(`in mode: ${process.env.MODE} http://localhost:80`);
  });
}

module.exports = app;
