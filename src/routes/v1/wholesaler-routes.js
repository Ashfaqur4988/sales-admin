const express = require("express");
const { WholesalerController } = require("../../controllers");
const router = express.Router();

router.get("/turnovers", WholesalerController.getMonthlyTurnover);
router.get(
  "/turnover/max/retailer",
  WholesalerController.getMaxTurnoverPerRetailer
);
router.post("/", WholesalerController.createWholesaler);
router.get("/", WholesalerController.getWholesalers);
router.get("/:id", WholesalerController.getWholesaler);
router.delete("/:id", WholesalerController.destroyWholesaler);
router.patch("/:id", WholesalerController.updateWholesaler);

module.exports = router;
