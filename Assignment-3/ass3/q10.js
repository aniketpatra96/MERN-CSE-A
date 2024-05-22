//21BCSE30 | ANIKET PATRA
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, roll, grade) {
    super(name, age);
    this.roll = roll;
    this.grade = grade;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Roll: ${this.roll}`);
    console.log(`Grade: ${this.grade}`);
  }
}

const student1 = new Student("John", 20, 101, "A");
console.log(student1.getInfo());
student1.displayDetails();
