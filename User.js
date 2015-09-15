function User(name) {
}

//Create a function called reflector
//print current class + methods + properties that belong to only that class
//object.getPrototypeOf(object);  returns prototype
function reflector (name) {
  this.name = name;
  return console.log(User.getPrototypeOf(User));
}

module.exports = User;