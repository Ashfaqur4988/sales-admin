"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Retailer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Wholesaler, {
        through: "Stocks",
        foreignKey: "retailerId",
        otherKey: "wholesalerId",
      });

      this.hasMany(models.Stock, {
        foreignKey: "retailerId",
        onDelete: "CASCADE",
        as: "retailerStocks",
      });
    }
  }
  Retailer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobileNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Retailer",
    }
  );
  return Retailer;
};
