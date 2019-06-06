const express = require('express');
const EquipmentController = require('../../api/controllers/equipment.controller');

const privateRoutes = () => {
  const router = express.Router();
  const equipmentController = EquipmentController();

  /**
     * @swagger
     * /api/private/meta-data:
     *    get:
     *      description: Returns list of equipment
     *      tags:
     *        - meta-data
     *      produces:
     *          - application/json
     *      parameters: []
     *      responses:
     *          200:
     *              description: List of equipment meta-data
     *              schema:
     *              type: object
     *              properties:
     *                  meta-data:
     *                      type: array
     *                      description: all the equipment meta-data
     *                      items:
     *                          type: string
     */
  router.route('/meta-data')
    .get(equipmentController.read);

  return router;
};

module.exports = privateRoutes();
