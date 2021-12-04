class Person {
  firstName: any;
  lastName: any;

  constructor(fName: any, lName: any) {
    this.firstName = fName;
    this.lastName = lName;
  }

  getName() {
    return `${this.firstName} - ${this.lastName}`;
  }
  greet() {
    return `Hello good morning ${this.getName()}`;
  }
}

let ram = new Person('Samadhan', 'Mali');
let message = ram.greet();

console.log(message);
