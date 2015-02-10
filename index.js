module.exports = createPublicQuery
var extend = require('lodash.assign')

function createPublicQuery(query) {
  var now = new Date()
  , publicQuery = extend({}, query
    , { state: 'Published'
    , $and:
      [ { $or: [ { liveDate: null }, { liveDate: { $lte: now } } ] }
      , { $or: [ { expiryDate: null }, { expiryDate: { $gte: now } } ] }
      ]
    })
  // Join any $and
  if (query.$and) publicQuery.$and = publicQuery.$and.concat(query.$and)
  return publicQuery
}
