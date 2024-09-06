const express = require("express");
const app = express();
app.use(express.static("./frontend/build"));
app.get("/", (req, res) => {
    res.status(200).sendFile("./frontend/build/index.html");
})
// if development
// app.listen(80, () => {
//     console.log('http://localhost:80');
   
// })

//if production
export default app;
