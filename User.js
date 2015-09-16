function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.profile = function(name, age) {
  return this.name + this.age;
};

var user = new User('Banana', 4);

// console.log(user.name, user.age);

module.exports = user;