"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wholesaler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Retailer, {
        through: "Stocks",
        foreignKey: "wholesalerId",
        otherKey: "retailerId",
      });

      this.hasMany(models.Stock, {
        foreignKey: "wholesalerId",
        onDelete: "CASCADE",
        as: "wholesalerStocks",
      });
    }
  }
  Wholesaler.init(
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
      modelName: "Wholesaler",
    }
  );
  return Wholesaler;
};
