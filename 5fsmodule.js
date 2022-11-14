const fs = require('fs');

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second);

// writeFileSync('./content/result-sync.txt',
//   `here is the result : ${first} , ${second}`
// )
writeFileSync('./content/result-sync.txt',
  `here is the result : ${first} , ${second}`,{flag : 'a'}
)

// by setting we can append without this content will be over ridden




