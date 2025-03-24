"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const stockData = [];
    const startDate = new Date("2021-01-01");
    const endDate = new Date("2021-12-31");

    for (let i = 0; i < 30; i++) {
      stockData.push({
        retailerId: Math.floor(Math.random() * 9) + 1,
        wholesalerId: Math.floor(Math.random() * 8) + 1,
        stock: Math.floor(Math.random() * 500) + 100,
        date: new Date(
          startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime())
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Stocks", stockData);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stocks", null, {});
  },
};
