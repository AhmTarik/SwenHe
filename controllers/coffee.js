const { logger } = require('../helpers');
const { productsRepo } = require('../repository');

// get sku list
exports.get = async (req, res) => {
    try {
        logger.info(`requestID ${req.requestId} in get lookups api`);
        let result = productsRepo.get(req.query)
        return res.Ok(result);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}


