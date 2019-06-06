const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const tableName = 'equipment';

/**
 * @swagger
 * definitions:
 *    Equipment:
 *      type: object
 *      required:
 *        - title
 *        - description
 *      properties:
 *        title:
 *          type: string
 *        description:
 *          type: string
 *
 */
const Equipment = sequelize.define('Equipment', {
  title: {
    type: Sequelize.STRING,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
}, { tableName });

module.exports = Equipment;
