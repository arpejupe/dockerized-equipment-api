const express = require('express');
const EquipmentController = require('../../api/controllers/equipment.controller');

const publicRoutes = () => {
  const router = express.Router();
  const equipmentController = EquipmentController();

  /**
     * @swagger
     * /api/public/equipment:
     *    post:
     *      description: Creates equipment
     *      tags:
     *        - equipment
     *      produces:
     *          - application/json
     *      parameters:
     *        - name: Equipment
     *          description: Equipment object
     *          in: body
     *          required: true
     *          schema:
     *              $ref: '#/definitions/Equipment'
     *      responses:
     *       200:
     *         description: Adds equipment to resources
     *         schema:
     *           type: object
     *           properties:
     *             $ref: '#/definitions/Equipment'
     *             message:
     *               type: string
     *               default: 'Added'
     */
  router.route('/equipment')
    .post(equipmentController.create);

  /**
     * @swagger
     * /api/public/equipment/{id}:
     *    get:
     *      description: This returns equipment item by id
     *      tags:
     *        - equipment
     *      produces:
     *          - application/json
     *      parameters:
     *        - name: id
     *          description: Equipment id
     *          in: "path"
     *          required: true
     *          type: string
     *      responses:
     *       200:
     *         description: Adds equipment to resources
     *         schema:
     *           type: object
     *           properties:
     *             $ref: '#/definitions/Equipment'
     */
  router.route('/equipment/:id')
    .get(equipmentController.read);

  /**
     * @swagger
     * /api/public/equipment:
     *    get:
     *      description: Returns list of equipment
     *      tags:
     *        - equipment
     *      produces:
     *          - application/json
     *      parameters: []
     *      responses:
     *          200:
     *              description: List of equipment
     *              schema:
     *              type: object
     *              properties:
     *                  equipment:
     *                      type: array
     *                      description: all the equipment
     *                      items:
     *                          type: string
     */
  router.route('/equipment')
    .get(equipmentController.readAll);

  /**
     * @swagger
     * /api/public/equipment/{id}:
     *    put:
     *      description: Updates equipment
     *      tags:
     *        - equipment
     *      produces:
     *          - application/json
     *      parameters:
     *        - name: id
     *          description: id
     *          in: path
     *          required: true
     *          type: string
     *        - name: Equipment
     *          description: Object equipment
     *          in: body
     *          required: true
     *          schema:
     *              $ref: '#/definitions/Equipment'
     *      responses:
     *       200:
     *         description: Updates equipment to resources
     *         schema:
     *           type: object
     *           properties:
     *             $ref: '#/definitions/Equipment'
     *             message:
     *               type: string
     *               default: 'Added'
     */
  router.route('/equipment/:id')
    .put(equipmentController.update);

  /**
     * @swagger
     * /api/public/equipment/{id}:
     *    delete:
     *      description: This deletes equipment item by id
     *      tags:
     *        - equipment
     *      produces:
     *          - application/json
     *      parameters:
     *        - name: id
     *          description: Equipment id
     *          in: "path"
     *          required: true
     *          type: string
     *      responses:
     *       200:
     *         description: deleted equipment with id
     *         schema:
     *           type: string
     *           properties:
     *             msg: string
     */
  router.route('/equipment/:id')
    .delete(equipmentController.remove);

  return router;
};

module.exports = publicRoutes();
