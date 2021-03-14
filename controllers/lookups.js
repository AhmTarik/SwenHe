const { logger } = require('../helpers');
 const { lookupsRepo } = require('../repository');

exports.getLookupTypes = async (req, res) => {
    try {
        logger.info(`requestID ${req.requestId} in getLookupTypes api`);
        let result = lookupsRepo.getLookupsType();
        return res.Ok(result);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in create api is:`, err)
        return res.InternalServerError();
    }
}


exports.get = async (req, res) => {
    try {
        logger.info(`requestID ${req.requestId} in get lookups api`);
        let result = lookupsRepo.get(req.query);
        return res.Ok(result);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}


