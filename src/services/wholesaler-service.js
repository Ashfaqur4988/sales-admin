const { StatusCodes } = require("http-status-codes");
const { WholesalerRepository, StockRepository } = require("../repository");
const AppError = require("../utils/error/app-error");
const { sequelize, Sequelize } = require("../models");

const wholesalerRepository = new WholesalerRepository();
const stockRepository = new StockRepository();

async function createWholesaler(data) {
  console.log("body service: ", data);

  try {
    const wholesaler = await wholesalerRepository.create(data);
    return wholesaler;
  } catch (error) {
    console.log("errors service: ", error);

    throw new AppError(
      "Cannot create a new Wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getWholesalers() {
  try {
    const wholesalers = await wholesalerRepository.getAll();
    return wholesalers;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getWholesaler(id) {
  try {
    const wholesaler = await wholesalerRepository.getWholesalerWithRetailers(
      id
    );
    return wholesaler;
  } catch (error) {
    // console.log("service ", error);

    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The wholesaler you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getMonthlyTurnover() {
  try {
    const wholesalers = await wholesalerRepository.getAll();
    // console.log(wholesalers);
    const turnoverData = [];

    for (let wholesaler of wholesalers) {
      const turnover = await stockRepository.getStocksByWholesalerId(
        wholesaler.id
      );
      // console.log(turnover);

      let turnOverMonthly = {
        wholesaler: {
          id: wholesaler.id,
          name: wholesaler.name,
          turnover,
        },
      };
      turnoverData.push(turnOverMonthly);
    }

    return turnoverData;
  } catch (error) {
    throw new AppError(
      "Cannot check turnover data of the wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getMaxTurnoverPerRetailer() {
  try {
    const stocks = stockRepository.getMaxTurnoverPerRetailer();
    return stocks;
  } catch (error) {
    throw new AppError(
      "Cannot check turnover data of the wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyWholesaler(id) {
  try {
    const wholesaler = await wholesalerRepository.destroy(id);
    return wholesaler;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The wholesaler you tried to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot delete data of the wholesaler",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateWholesaler(id, data) {
  try {
    const wholesaler = await wholesalerRepository.update(id, data);
    return wholesaler;
  } catch (error) {
    if (error.statusCode === StatusCodes.BAD_REQUEST) {
      throw new AppError(
        "The wholesaler you tried to update is not present.",
        error.statusCode
      );
    }
    throw new AppError("Cannot update data of the wholesaler");
  }
}

module.exports = {
  createWholesaler,
  destroyWholesaler,
  updateWholesaler,
  getWholesaler,
  getWholesalers,
  getMonthlyTurnover,
  getMaxTurnoverPerRetailer,
};
