const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

// Serve static files from the React app build
app.use(express.static(path.join(__dirname,"..", "public"))); // Adjust path if needed

// API routes (if any)
// You can add routes for APIs here if needed, or handle them in another file

// Catch-all handler for routes to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

console.log(process.env.MODE);

if (process.env.MODE !== "production") {
  app.listen(80, () => {
    console.log(`in mode: ${process.env.MODE} http://localhost:80`);
  });
}

module.exports = app;
