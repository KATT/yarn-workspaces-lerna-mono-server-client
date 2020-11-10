
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./shared.cjs.production.min.js')
} else {
  module.exports = require('./shared.cjs.development.js')
}
