const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");

app.use("/shelters", shelterRoutes);

app.listen(3060, () => {
  console.log("LISTENING ON PORT 3060");
});
