// Created and switched database
use("csea")

// Create a collection
// db.createCollection("student")

// insert a record
// database.collectionName.insert[, one, many]
// db.student.insertOne({
//     "roll": 2,
//     "name": "Jane"
// })

// db.student.insertMany([
//     {
//         "roll": 3,
//         "name": "Sam",
//     },
//     {
//         "roll": 4,
//         "name": 1232,
//         "mobile": 743586546,
//         "email": "test@gmail.com"
//     },
//     {
//         "rollnumber": 5,
//         "name": "Merry"
//     }
// ])


// Display Data
// db.student.find()


// db.emp.insertMany([
//     {
//         "eid": "E101",
//         "name": "John Doe",
//         "salary": 60000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E102",
//         "name": "Jane Smith",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E103",
//         "name": "Amit Patel",
//         "salary": 55000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E104",
//         "name": "Priya Sharma",
//         "salary": 80000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E105",
//         "name": "Raj Singh",
//         "salary": 75000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E106",
//         "name": "Kavita Gupta",
//         "salary": 60000,
//         "dept": "MGR"
//     },
//     {
//         "eid": "E107",
//         "name": "Sandeep Verma",
//         "salary": 90000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E108",
//         "name": "Ananya Das",
//         "salary": 65000,
//         "dept": "HR"
//     },
//     {
//         "eid": "E109",
//         "name": "Rahul Kapoor",
//         "salary": 70000,
//         "dept": "SDE"
//     },
//     {
//         "eid": "E110",
//         "name": "Pooja Khanna",
//         "salary": 80000,
//         "dept": "SDE"
//     }
// ])

// db.emp.find()
// db.emp.find().sort({"name": 1})
// db.emp.find().sort({"salary": -1})
// db.emp.find().sort({"dept": 1, "salary": -1})
// db.emp.find().limit(2)
// Emp with highest sal
// db.emp.find().sort({"salary": -1}).limit(1)

// Query
// find({query},{projection},{option})
// db.emp.find({},{"name": 1})
// db.emp.find({},{"_id": 0, "name": 1})
// db.emp.find({},{"_id": 0, "name": 1, "salary": 1})
// db.emp.find({},{"_id": 0})
// db.emp.find({"name": "Amit Patel"})
// db.emp.find({"name": "amit patel"})
// emps of SDE
// db.emp.find({"dept": "SDE"})
// AND
// db.emp.find({"dept": "SDE", "salary": 90000})

// Operator
// Logical
// {<field> : {$operator: <value>}}
// db.emp.find({"name": "Amit Patel"})
// db.emp.find({"name": {$eq: "Amit Patel"}})
// Emp sal >=80000
// db.emp.find({"salary": {$gte: 80000}})

// One emp of SDE
// db.emp.findOne({"dept": {$eq: "SDE"}})

// db.emp.find({"dept": {$in : ["HR", "MGR"]}})


// Logical
// {$operator : [{expression1}, {expression2}, ... , {expressionn}]}
// emps of hr and mgr
// db.emp.find({$or: [{"dept": "HR"}, {"dept": "MGR"}]})

// db.emp.find({"dept": "SDE", "salary": 90000})
// AND(Explicit)
// db.emp.find({$and: [{"dept": "SDE"}, {"salary": 90000}]})
db.emp.find({$and: [{"dept": "SDE"}, {"salary": {$gt : 70000}}]})