// CommonJS, every file is a module
// Modules - encapsulated code (only share minimum)

const names = require('./4-names')
const fun = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)
console.log(names)

require('./7-mind-grenade')
fun(names.john)
fun(names.peter)