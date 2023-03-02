const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')// this reads file and link its content to the variable first
const second = readFileSync('./content/second.txt', 'utf8')// this reads file and link its content to the variable secound

writeFileSync(//This is a function that take in 3 input parameters,
// 1 where to write to
// 2 the content to add to the file
// 3 what kind of mode we want to write/open the file we want to open the file with.

  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
//{flag 'a'} = append.
//Doesn't overwrite. Adds to the end of the existing file.
//Standard mode is 'w', which creates a .txt file as shown in line11.
console.log('done with this task')
console.log('starting the next one')
