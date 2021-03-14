const { lookupTypesEnum } = require('../models/enum/productEnum');
const {lookupsData} = require('../DB/lookupsData');
const { generalHepler } = require('../helpers')
const { search } = generalHepler;

module.exports.get = (query = {}) => {
return  lookupsData.filter(search, query);
};


module.exports.getLookupsType = () => {
    return Object.values(lookupTypesEnum);
};








