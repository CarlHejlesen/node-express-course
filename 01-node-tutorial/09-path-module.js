const path = require('path')
console.log('1')
console.log(path.sep)// shows how the operation sysstem goes down a file path /

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log('2')
console.log(filePath)

const base = path.basename(filePath)
console.log('3')
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('4')
console.log(absolute)
