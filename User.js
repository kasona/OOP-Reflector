function User(name, age, date) {
  this.name = name;
  this.age = age;
  this.date = date;
}

//Create a function called reflector
//print current class + methods + properties that belong to only that class
//object.getPrototypeOf(object);  returns prototype
User.prototype.reflector = function () {
  return console.log(Object.getPrototypeOf(SuperUser));

};

module.exports = User;