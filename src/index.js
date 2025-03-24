//package imports
const express = require("express");

//local imports
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

//middlewares mounting below
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const setUpAndServerStart = () => {
  app.listen(ServerConfig.PORT, () => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
  });
};

setUpAndServerStart();
