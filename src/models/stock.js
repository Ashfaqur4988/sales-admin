"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Wholesaler, {
        foreignKey: "wholesalerId",
        onDelete: "CASCADE",
      });

      this.belongsTo(models.Retailer, {
        foreignKey: "retailerId",
        onDelete: "CASCADE",
      });
    }
  }
  Stock.init(
    {
      retailerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wholesalerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Stock",
    }
  );
  return Stock;
};
