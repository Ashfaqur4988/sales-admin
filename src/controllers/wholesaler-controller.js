const { StatusCodes } = require("http-status-codes");
const { WholesalerService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createWholesaler(req, res) {
  try {
    const wholesaler = await WholesalerService.createWholesaler({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
    });
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully created a wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while creating wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getWholesaler(req, res) {
  try {
    const wholesaler = await WholesalerService.getWholesaler(req.params.id);
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully fetched wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    // console.log("controller ", error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getWholesalers(req, res) {
  try {
    const wholesaler = await WholesalerService.getWholesalers();
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully fetched all wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function destroyWholesaler(req, res) {
  try {
    const wholesaler = await WholesalerService.destroyWholesaler(req.params.id);
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully created a wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("errors controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while deleting wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateWholesaler(req, res) {
  try {
    const wholesaler = await WholesalerService.updateWholesaler(req.params.id);
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully updated a wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("errors controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while updating wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getMonthlyTurnover(req, res) {
  try {
    const wholesaler = await WholesalerService.getMonthlyTurnover();
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully calculated turnover a wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    // console.log("errors controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message =
      "Something went wrong while calculating turnover of wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getMaxTurnoverPerRetailer(req, res) {
  try {
    const wholesaler = await WholesalerService.getMaxTurnoverPerRetailer();
    SuccessResponse.data = wholesaler;
    SuccessResponse.message = "Successfully calculated turnover a wholesaler";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    // console.log("errors controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message =
      "Something went wrong while calculating turnover of wholesaler";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createWholesaler,
  getWholesaler,
  getWholesalers,
  destroyWholesaler,
  updateWholesaler,
  getMonthlyTurnover,
  getMaxTurnoverPerRetailer,
};
