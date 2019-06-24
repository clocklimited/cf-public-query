# cf-public-query

Extends a query object by adding published and visible article criteria

[![build status](https://secure.travis-ci.org/clocklimited/cf-public-query.png)](http://travis-ci.org/clocklimited/cf-public-query) [![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/cf-public-query.svg)](https://greenkeeper.io/)

## Installation

```
npm install cf-public-query --save
```

## Usage
```js
var createPublicQuery = require('cf-public-query')

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

```

### `var query = createPublicQuery(query)`

Options must include:

- `query` - a query object to be extended with visible and published criteria

## Credits
[Dom Harrington](https://github.com/clocklimited/)
