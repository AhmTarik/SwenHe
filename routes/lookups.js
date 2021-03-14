const express = require('express');
const { lookupsController } = require('../controllers/index');
const router = express.Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/**
 * @swagger
 *
 * definitions:
 *   lookup:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - type
 *     properties:
 *       id:
 *         type: any
 *       name:
 *         type: string
 *       type:
 *         type: string
 *   lookupsTypes:
 *     allOf:
 *       - type: string
 */


/**
 * @swagger
 * /lookups:
 *   get:
 *     description:  Use to request a list of lookups
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: query
 *        name: id
 *        description: match lookup by id
 *        schema:
 *           type: string
 *      - in: query
 *        name: name
 *        description: match lookup by name
 *        schema:
 *           type: string
 *      - in: query
 *        name: type
 *        description: match lookup by type
 *        schema:
 *           type: string
 *     responses:
 *       200:
 *         description: return array of lookup object
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/lookup'
 */
router.get('/lookups/', lookupsController.get);


/**
 * @swagger
 * /lookups/types:
 *  get:
 *    description: Use to request all lookups types like [coffe_machine_type,water_line_compatible,coffe_pods_type,... etc]
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/lookupsTypes'
 */
router.get('/lookups/types', lookupsController.getLookupTypes);


module.exports = router;