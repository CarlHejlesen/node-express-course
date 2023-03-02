// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')//imports module xports from 04-names.js
const sayHi = require('./05-utils')//imports module xports from 05-utils.js its a function sayhi
const data = require('./06-alternative-flavor') // this exports an object and an array
require('./07-mind-grenade')// this imporports a function that is exported from 07-mind-grenade witch is the whole file and then runs it
sayHi('susan')// this is our function that we imported from 05-utils
sayHi(names.john)// names.john is a name imported from 04-names
sayHi(names.peter) // anoter name impoted from 04-names
console.log(data)// this is the things we imported from 07-mind-grenade




