//21BCSE30 | ANIKET PATRA
const Employees = [
  {
    name: "Aniket Patra",
    skill: ["c", "c++", "java", "javascript", "php"],
    salary: 90000,
  },
  { name: "Anmol Partha Behera", skill: ["c++", "java"], salary: 70000 },
  { name: "Ashutosh Panda", skill: ["python", "php", "java"], salary: 60000 },
  { name: "Ram Rastogi", skill: ["c#", "asp.net"], salary: 85000 },
  { name: "Abhinash Sharma", skill: ["c#", "sql"], salary: 120000 },
  { name: "Priyanshu Rout", skill: ["java", "python"], salary: 100000 },
  {
    name: "Kalyani Nayak",
    skill: ["sql", "javascript", "java", "python"],
    salary: 150000,
  },
  { name: "Kasturi Dhal", skill: ["php", "html/css"], salary: 95000 },
  {
    name: "Arya Dash",
    skill: ["c", "c++", "java", "javascript"],
    salary: 200000,
  },
  { name: "Anubhav Mohanty", skill: ["python", "sql"], salary: 50000 },
];

Employees.forEach((employee) => {
  const { name, skill } = employee;
  console.log(`Employee Name : ${name}`);
  skill.forEach((skillName) => console.log(`Skills : ${skillName}`));
});

const sortedEmployees = Employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedEmployees);

const HighestPaidEmployee = Employees.reduce(
  (hpaid, employee) => (hpaid.salary > employee.salary ? hpaid : employee),
  Employees[0]
);

console.log(
  `The Highest Paid Employee is ${HighestPaidEmployee.name} with a salary of ${HighestPaidEmployee.salary}`
);

const skills = new Set();

Employees.forEach((employee) => {
  employee.skill.forEach((skill) => skills.add(skill));
});

console.log("Unique Skills among Employees are ", [...skills]);

const peopleKnowJavascript = Employees.filter((employee) =>
  employee.skill.includes("javascript")
);

console.log("People who know javascript are : ");
peopleKnowJavascript.forEach((employee) => {
  console.log(employee.name);
});
