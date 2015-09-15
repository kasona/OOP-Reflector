var User = require('./User');

function GroupUser() {
}

GroupUser.prototype.banana = function(num) {
  return 'Days till banana apocalypse: ' + num;
};


// add Recursion for reflector

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(GroupUser.prototype, User.prototype);