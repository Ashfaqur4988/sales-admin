const { StatusCodes } = require("http-status-codes");
const { StockService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createStock(req, res) {
  try {
    const stock = await StockService.createStock({
      retailerId: req.body.retailerId,
      wholesalerId: req.body.wholesalerId,
      stock: req.body.stock,
      date: req.body.date,
    });
    SuccessResponse.data = stock;
    SuccessResponse.message = "Successfully created a stock";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while creating stock";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getStock(req, res) {
  try {
    const stock = await StockService.getStock(req.params.id);
    SuccessResponse.data = stock;
    SuccessResponse.message = "Successfully fetched a stock";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching a stock";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getStocks(req, res) {
  try {
    const stocks = await StockService.getStocks();
    SuccessResponse.data = stocks;
    SuccessResponse.message = "Successfully fetched stocks";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching stocks";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = { createStock, getStock, getStocks };
