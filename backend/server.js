const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.status(200).sendFile("./public/index.html");
})
// if development
// app.listen(80, () => {
//     console.log('http://localhost:80');
   
// })

//if production
module.exports = app;
