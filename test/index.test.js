var createPublicQuery = require('../')
  , assert = require('assert-diff')
  , mockdate = require('mockdate')

describe('cf-public-query', function () {
  var date =
  before(function() {
    date = new Date()
    mockdate.set(date)
  })

  after(function() {
    mockdate.reset()
  })

  it('should set a state of `Published`', function () {
    assert.equal(createPublicQuery({}).state, 'Published')
  })

  it('should set `liveDate` query to be null or less than now', function () {
    assert.deepEqual(createPublicQuery({}).$and[0], { $or: [ { liveDate: null }, { liveDate: { $lte: date } } ] })
  })

  it('should set `expiryDate` query to be null or greater than now', function () {
    assert.deepEqual(createPublicQuery({}).$and[1]
      , { $or: [ { expiryDate: null }, { expiryDate: { $gte: date } } ] })
  })

  it('should allow a custom query to be passed in', function () {
    assert.equal(createPublicQuery({ a: 1 }).a, 1)
  })

  it('should not lose $and in original query', function () {
    var query = createPublicQuery({ $and: [ { age: 37 }, { name: 'Paul' } ] })
    assert(query.$and[1].$or)
    assert.equal(query.$and[2].age, 37, JSON.stringify(query))
    assert.equal(query.$and[3].name, 'Paul', JSON.stringify(query))
  })

})
