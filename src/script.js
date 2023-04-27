class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printInfo() {
    console.log(
      `${this.name} is ${this.age} years old and identifies as ${this.gender}.`
    );
  }
}

const person1 = new Person('John', 32, 'male');
const person2 = new Person('Jane', 25, 'female');

person1.printInfo();
person2.printInfo();
