var User = require('../lib/User');
var GroupUser = require('../lib/GroupUser');

function SuperUser() {
  User.call(this, name);
  console.log(name);
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SuperUser.prototype, GroupUser.prototype);
extend(SuperUser.prototype, User.prototype);