const secret = "super secret" ; // local 

 // share (because both have been exported)
const john = 'john';
const peter = 'peter';


// console.log(module);

module.exports = {john,peter}; // then this module i.e this file will share these variable to all other module.

// module.exports = john;