# OOP-Reflector

1. Create 3 classes:
  User
  GroupUser
  SuperUser
2. Create a number of methods on the prototype of each class and create the following inheritance:
    GroupUser inherits from User
    SuperUser inherits from GroupUser
3. Write a function called reflector that takes in an instance of an object and use console.log() to print out the name of the current class, and the methods and properties that belong to only that class.
4. If this class inherits from another class, you should then repeat for each level of inheritance all the way up the prototype chain until you can't go any further.
