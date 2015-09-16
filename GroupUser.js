var User = require('./User');

function GroupUser() {

}

GroupUser.prototype.banana = function(num) {
  return 'Days till banana apocalypse: ' + num;
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(GroupUser.prototype, User.prototype);

var group = new GroupUser();
// console.log(group.banana(3));

module.exports = group;