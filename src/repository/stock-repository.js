const CrudRepository = require("./crud-repository.js");
const { Stock, sequelize, Sequelize } = require("../models");

class StockRepository extends CrudRepository {
  constructor() {
    super(Stock);
  }

  async getStocksByWholesalerId(wholesalerId) {
    const response = await Stock.findAll({
      where: {
        wholesalerId: wholesalerId,
        date: {
          [Sequelize.Op.between]: [
            new Date("2021-01-01"),
            new Date("2021-12-31"),
          ],
        },
      },
      attributes: [
        [sequelize.fn("SUM", sequelize.col("stock")), "totalAmount"],
      ],
      group: [sequelize.fn("MONTH", sequelize.col("date"))],
    });
    console.log(response);
    return response;
  }

  async getMaxTurnoverPerRetailer() {
    const response = await Stock.findAll({
      attributes: [
        "wholesalerId",
        [Sequelize.fn("MAX", Sequelize.col("stock")), "maxTurnover"],
      ],
      group: ["wholesalerId"],
      order: ["wholesalerId"],
    });

    return response;
  }
}

module.exports = StockRepository;
