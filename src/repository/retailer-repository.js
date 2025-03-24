const CrudRepository = require("./crud-repository.js");
const { Retailer, Wholesaler } = require("../models");

class RetailerRepository extends CrudRepository {
  constructor() {
    super(Retailer);
  }

  async getRetailerWithOneWholesaler() {
    const response = await Retailer.findAll({
      include: [
        {
          model: Wholesaler,
          as: "Wholesalers",
          through: { attributes: [] },
        },
      ],
    });

    if (!response) {
      throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
    }

    const filteredRetailer = response.filter((r) => r.Wholesalers.length === 1);

    return filteredRetailer;
  }
}

module.exports = RetailerRepository;
