const CrudRepository = require("./crud-repository.js");
const { Wholesaler, Retailer } = require("../models");
const { StatusCodes } = require("http-status-codes");

class WholesalerRepository extends CrudRepository {
  constructor() {
    super(Wholesaler);
  }

  async getWholesalerWithRetailers(id) {
    const response = await Wholesaler.findByPk(id, {
      include: [
        {
          model: Retailer,
          as: "Retailers",
          through: { attributes: [] },
        },
      ],
    });
    if (!response) {
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    }
    return response;
  }
}

module.exports = WholesalerRepository;
