const { StatusCodes } = require("http-status-codes");
const { RetailerService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createRetailer(req, res) {
  try {
    const retailer = await RetailerService.createRetailer({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
    });
    SuccessResponse.data = retailer;
    SuccessResponse.message = "Successfully created a retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while creating retailer";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getRetailer(req, res) {
  try {
    const retailer = await RetailerService.getRetailer(req.params.id);
    SuccessResponse.data = retailer;
    SuccessResponse.message = "Successfully fetched retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    // console.log(error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching retailer";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function getRetailers(req, res) {
  try {
    const retailers = await RetailerService.getRetailers();
    SuccessResponse.data = retailers;
    SuccessResponse.message = "Successfully fetched all retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching retailer";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
async function destroyRetailer(req, res) {
  try {
    const retailer = await RetailerService.destroyRetailer(req.params.id);
    SuccessResponse.data = retailer;
    SuccessResponse.message = "Successfully created a retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("errors controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while deleting retailer";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateRetailer(req, res) {
  try {
    const retailer = await RetailerService.updateRetailer(req.params.id);
    SuccessResponse.data = retailer;
    SuccessResponse.message = "Successfully created a retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while updating retailer";
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getRetailerWithOneWholesaler(req, res) {
  try {
    const retailer = await RetailerService.getRetailerWithOneWholesaler();
    SuccessResponse.data = retailer;
    SuccessResponse.message = "Successfully fetched all retailer";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("controller: ", error);
    ErrorResponse.error = error;
    ErrorResponse.message = "Something went wrong while fetching retailer";
    return res.status(500).json(ErrorResponse);
  }
}

module.exports = {
  createRetailer,
  getRetailer,
  getRetailers,
  destroyRetailer,
  updateRetailer,
  getRetailerWithOneWholesaler,
};
