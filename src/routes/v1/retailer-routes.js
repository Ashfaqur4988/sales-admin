const express = require("express");

const { RetailerController } = require("../../controllers");
const router = express.Router();

router.get("/", RetailerController.getRetailerWithOneWholesaler);
router.get("/:id", RetailerController.getRetailer);
router.post("/", RetailerController.createRetailer);
router.delete("/:id", RetailerController.destroyRetailer);
router.patch("/:id", RetailerController.updateRetailer);

module.exports = router;
