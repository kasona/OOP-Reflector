var User = require('./User');
var GroupUser = require('./GroupUser');
var SuperUser = require('./SuperUser');

function reflector(object) {
  if (Object.getPrototypeOf(superduper) === null) { // base case
    return false; // end if at the top
  } else {
    console.log(obj.constructor.name(superduper));
    console.log(Object.getPrototypeOf(superduper));
    console.log(Object.getOwnPropertyNames(superduper));
  }
  reflector(object);
}

console.log('CherryPeel');