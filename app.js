// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important infpo about project/package)
// manual approach (create package.json in the root, create properties, etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// 2 ways for deleting a package:
// 1 .npm uninstall <packageName>
// 2. delete package-lock.json and node modules folder and then remove the package under dependencies in package.json() and then run npm i in the terminal

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
