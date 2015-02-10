var createPublicQuery = require('../')
  , assert = require('assert')

describe('cf-public-query', function () {

  it('should set a state of `Published`', function () {
    assert.equal(createPublicQuery({}).state, 'Published')
  })

  it('should set `liveDate` query to be null or less than now', function () {
    assert.deepEqual(createPublicQuery({}).$and[0], { $or: [ { liveDate: null }, { liveDate: { $lte: new Date() } } ] })
  })

  it('should set `expiryDate` query to be null or greater than now', function () {
    assert.deepEqual(createPublicQuery({}).$and[1]
      , { $or: [ { expiryDate: null }, { expiryDate: { $gte: new Date() } } ] })
  })

  it('should allow a custom query to be passed in', function () {
    assert.equal(createPublicQuery({ a: 1 }).a, 1)
  })

  it('should not loose $and in original query', function () {
    assert.notEqual(
      createPublicQuery(
        { $and: [ { age: 37 }, { name: 'Paul' } ] }).$and.indexOf({ name: 'Paul' }), -1)
  })

})
