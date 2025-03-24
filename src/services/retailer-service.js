const { StatusCodes } = require("http-status-codes");
const { RetailerRepository } = require("../repository");
const AppError = require("../utils/error/app-error");

const retailerRepository = new RetailerRepository();

async function createRetailer(data) {
  try {
    const retailer = await retailerRepository.create(data);
    return retailer;
  } catch (error) {
    throw new AppError(
      "Cannot create a new retailer",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getRetailers() {
  try {
    const retailers = await retailerRepository.getAll();
    return retailers;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the retailers",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getRetailer(id) {
  try {
    const retailer = await retailerRepository.get(id);
    return retailer;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The retailer you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the retailer",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyRetailer(id) {
  try {
    const retailer = await retailerRepository.destroy(id);
    return retailer;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The retailer you tried to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot delete data of the retailer",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateRetailer(id, data) {
  try {
    const retailer = await retailerRepository.update(id, data);
    return retailer;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The retailer you tried to update is not present.",
        error.statusCode
      );
    }
    throw new AppError("Cannot update data of the retailer");
  }
}

async function getRetailerWithOneWholesaler() {
  try {
    const retailer = await retailerRepository.getRetailerWithOneWholesaler();
    return retailer;
  } catch (error) {
    console.log("controller: ", error);

    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The retailer you tried to fetched is not present.",
        error.statusCode
      );
    }
    throw new AppError("Cannot fetch data of the retailer");
  }
}

module.exports = {
  createRetailer,
  getRetailer,
  getRetailers,
  updateRetailer,
  destroyRetailer,
  getRetailerWithOneWholesaler,
};
