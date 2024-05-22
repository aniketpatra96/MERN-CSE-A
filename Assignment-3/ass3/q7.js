// 21BCSE30 | ANIKET PATRA
const students = [
  {
    name: "John",
    age: "20",
  },
  {
    name: "Emily",
    age: "22",
  },
  {
    name: "Michael",
    age: "19",
  },
  {
    name: "Jessica",
    age: "21",
  },
  {
    name: "Daniel",
    age: "20",
  },
  {
    name: "Sarah",
    age: "23",
  },
  {
    name: "David",
    age: "18",
  },
  {
    name: "Olivia",
    age: "20",
  },
  {
    name: "Matthew",
    age: "22",
  },
  {
    name: "Sophia",
    age: "19",
  },
];
//display the student details
students.forEach((student) => {
  const { name, age } = student;
  console.log(`${name} is ${age} years old.`);
});

//student with highest age
const studentHighestAge = students.reduce(
  (studentHighest, student) =>
    student.age > studentHighest.age ? student : studentHighest,
  students[0]
);

console.log(`Student with Highest Age is ${studentHighestAge.name} and her age is ${studentHighestAge.age} years.`);

//average age of the students
const sumAges = students.reduce((sum, student) => sum + parseInt(student.age), 0);
console.log("The average age of the students is ", sumAges / students.length);