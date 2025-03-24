const express = require("express");
const wholesalerRoutes = require("./wholesaler-routes.js");
const retailerRoutes = require("./retailer-routes.js");
const stockRoutes = require("./stock-routes.js");

const router = express.Router();

router.use("/wholesalers", wholesalerRoutes);
router.use("/retailers", retailerRoutes);
router.use("/stocks", stockRoutes);

module.exports = router;
