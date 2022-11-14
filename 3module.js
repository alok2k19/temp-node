 // CommonJS , every file in node  is module(by default)
 // Modules - Encapsulated Code(one share minimum)

const names = require('./3names');
const sayHi = require('./3util')

console.log(names);
console.log(sayHi);
 
// require('./3mindgraned');   it will invoke function in mindgraned module even it is not even called

 sayHi('Alok');
 sayHi(names.john);
 sayHi(names.peter);
// sayHi(names);


