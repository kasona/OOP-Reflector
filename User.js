function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.profile = function(name, age) {
  return this.name + this.age;
};

User.prototype.reflector = function () {
  return console.log(Object.getPrototypeOf(SuperUser));

};

module.exports = User;