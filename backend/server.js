const express = require("express");
require("dotenv").config();
const path = require("path");
const connectDatabase = require("./database/db");
const cookieParser = require("cookie-parser");
const { handleErrors } = require("./error/CatchAsyncErr");
const cors = require("cors");

// Server setup
const PORT = process.env.PORT || 80;
const mode = process.env.MODE || "production";

// Routers
const { authRouter } = require("./routes/auth.routes");
const cmsRouter = require("./routes/webdata.routes");
const AnalyticsRouter = require("./routes/analytics.routes");
const { trackVisit } = require("./middleware/logVisits");
const authorize = require("./middleware/verify");
const app = express();

// Serve static files from the React app build
if (mode === "development") app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(cookieParser());

// Middleware for logging visits
app.use(trackVisit);

// API routes
app.use("/api", authRouter);
app.use("/api/cms", cmsRouter);
app.use("/api/analytics", AnalyticsRouter);
// Handle `/dashboard` route
app.get("/dashboard", authorize, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//auth for dashboard routes
app.get("/dashboard/*", authorize, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// Catch-all handler for React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});
app.use(handleErrors);

// Connect to database
connectDatabase();

// Graceful shutdown handlers
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  console.info("the server is shutting down...");
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  console.info("the server is shutting down...");
  process.exit(1);
});

if (mode === "development")
  app.listen(PORT, () => {
    console.log(`Server running in mode: ${mode} on http://localhost:${PORT}`);
  });

module.exports = app;
