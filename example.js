var createPublicQuery = require('./')

console.log(require('util').inspect(createPublicQuery({ title: 'Article title' }), { depth: null }))

// Returns the following query:
//
// { title: 'Article title',
//   state: 'Published',
//   '$and':
//    [ { '$or':
//         [ { liveDate: null },
//           { liveDate: { '$lte': Tue May 20 2014 11:51:02 GMT+0100 (BST) } } ] },
//      { '$or':
//         [ { expiryDate: null },
//           { expiryDate: { '$gte': Tue May 20 2014 11:51:02 GMT+0100 (BST) } } ] } ] }
