var User = require('./User');
var GroupUser = require('./GroupUser');

function SuperUser() {
}

SuperUser.prototype.apple = function (num) {
  return 'Days till apple apocalypse: ' + num;
};

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

var superduper = new SuperUser();
// console.log(superduper.apple(1));

module.exports = superduper;