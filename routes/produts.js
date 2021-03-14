const express = require('express');
const {coffeeController} = require('../controllers');
const router = express.Router();


/**
 * @swagger
 *
 * definitions:
 *   product:
 *     type: object
 *     required:
 *       - code
 *     properties:
 *       code:
 *         type: string
 *       productType:
 *         type: string
 *       waterLine:
 *         type: string
 *       coffeFlavor:
 *         type: string
 *       packSize:
 *         type: integer
 */


/**
 * @swagger
 * /products/:
 *  get:
 *    description: Use to request a list of products
 *    parameters:
 *      - in: query
 *        name: code
 *        description: match product by code
 *        schema:
 *           type: string
 *      - in: query
 *        name: productType
 *        description: match product by productType id
 *        schema:
 *           type: string
 *      - in: query
 *        name: waterLine
 *        description: match product by waterLine
 *      - in: query
 *        name: coffeFlavor
 *        description: match product by coffeFlavor 
 *      - in: query
 *        name: packSize
 *        description: match product by packSize  
 *        schema:
 *           type: string
 *    responses:
 *      '200':
 *        description: A successful response
 *        schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/product'
 */
router.get('/products/', coffeeController.get);


module.exports = router;