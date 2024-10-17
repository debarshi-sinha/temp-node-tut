const {readFileSync, writeFileSync} = require('fs')

// OR
// const fs = require('fs')
// fs.readFileSync();

console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

//to Overwrite
// writeFileSync('./content/result-sync.txt',
//               `Here is the result ${first}, ${second}`
//             )

//To apend
writeFileSync('./content/result-sync.txt',    
                `Here is the result ${first}, ${second}`,
                {flag : 'a'} 
            )

console.log('Done with the task')
console.log('Starting the next one')
