const { StatusCodes } = require("http-status-codes");
const { StockRepository } = require("../repository");
const AppError = require("../utils/error/app-error");

const stockRepository = new StockRepository();

async function createStock(data) {
  try {
    const stock = await StockRepository.create(data);
    return stock;
  } catch (error) {
    throw new AppError(
      "Cannot create a new stock",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getStock(data) {
  try {
    const stock = await stockRepository.get(data);
    return stock;
  } catch (error) {
    throw new AppError(
      "Cannot create a new stock",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getStocks() {
  try {
    const stocks = await stockRepository.getAll();
    return stocks;
  } catch (error) {
    throw new AppError(
      "Cannot create a new stock",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createStock,
  getStock,
  getStocks,
};
