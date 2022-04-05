const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const DBconnect = require("./DBconnect");
DBconnect();
app.use(express.json());
app.use("/users", require("./routes/UserRouter"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is runninig in port ${PORT}`);
});
