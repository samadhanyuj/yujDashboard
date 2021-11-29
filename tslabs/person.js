var Person = /** @class */ (function () {
  function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  Person.prototype.getName = function () {
    return "".concat(this.firstName, " - ").concat(this.lastName);
  };
  Person.prototype.greet = function () {
    return "Hello good Morning ".concat(this.getName());
  };
  return Person;
})();
var ram = new Person("Samadhan", "Mali");
var message = ram.greet();
console.log(message);
