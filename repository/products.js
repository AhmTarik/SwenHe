const { skuListData } = require('../DB/skuData');
const { generalHepler } = require('../helpers')
const { search } = generalHepler;



module.exports.get = (query = {}) => {
  return skuListData.filter(search, query);
};










