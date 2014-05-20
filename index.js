module.exports = createPublicQuery

var extend = require('lodash.assign')

function createPublicQuery(query) {
  var now = new Date()

  query = extend({}, query
    , { state: 'Published'
    , $and:
      [ { $or: [ { liveDate: null }, { liveDate: { $lte: now } } ] }
      , { $or: [ { expiryDate: null }, { expiryDate: { $gte: now } } ] }
      ]
    })

  return query
}
