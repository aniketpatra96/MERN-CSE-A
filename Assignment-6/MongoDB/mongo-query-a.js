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
// db.emp.find({$and: [{"dept": "SDE"}, {"salary": {$gt : 70000}}]})


// Search
// db.emp.find({"name": /Amit/})
// db.emp.find({"name": /a/})
// db.emp.find({"name": /^A/})
// db.emp.find({"name": /a$/})

// Update
// update({query},{$s: {updates(k:v)}}, {options})
// db.emp.updateOne({"eid": "E101"}, {$set: {"salary": 65000}})
// db.emp.updateOne({"eid": "E102"}, {$set: {"salary": 65000, "dept": "MGR"}})
// db.emp.find()
// db.emp.updateMany({"dept": "SDE"}, {$set: {"dept": "SDE-1"}})

// Aggregation Pipeline
// aggregate([
//     {
//         // Stage-1
//     },
//     {
//         //Stage-2
//     },
//     ...
// ])
// db.emp.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           avgSal: {$avg: "$salary"}
//         }
//     }
// ])

// db.emp.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           avgSal: {$avg: "$salary"}
//         }
//     },
//     {
//         $match: {"avgSal": {$gt: 70000}}
//     }
// ])

// db.emp.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           avgSal: {$avg: "$salary"}
//         }
//     },
//     {
//         $match: {"avgSal": {$gt: 70000}}
//     },
//     {
//         $project: {
//           _id: 1
//         }
//     }
// ])

// db.emp.aggregate([
//     {
//         $group: {
//           _id: null,
//           avgSal: {$avg: "$salary"}
//         }
//     }
// ])

// db.emp.aggregate([
//     {
//         $group: {
//           _id: "$dept",
//           empCount: { $sum: 1 }
//         }
//     }
// ])


// db.contact.insertMany([
//     {
//         "eid": "E101",
//         "mobile": "9876543210",
//         "email": "john.doe@example.com",
//         "address": {
//             "city": "Mumbai",
//             "state": "Maharashtra",
//             "zip": 400001
//         }
//     },
//     {
//         "eid": "E102",
//         "mobile": "9876543211",
//         "email": "jane.smith@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 110001
//         }
//     },
//     {
//         "eid": "E103",
//         "mobile": "9876543212",
//         "email": "amit.patel@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 380001
//         }
//     },
//     {
//         "eid": "E104",
//         "mobile": "9876543213",
//         "email": "priya.sharma@example.com",
//         "address": {
//             "city": "Chandigarh",
//             "state": "Punjab",
//             "zip": 160001
//         }
//     },
//     {
//         "eid": "E105",
//         "mobile": "9876543214",
//         "email": "raj.singh@example.com",
//         "address": {
//             "city": "Delhi",
//             "state": "Delhi",
//             "zip": 302001
//         }
//     },
//     {
//         "eid": "E106",
//         "mobile": "9876543215",
//         "email": "kavita.gupta@example.com",
//         "address": {
//             "city": "Kolkata",
//             "state": "West Bengal",
//             "zip": 700001
//         }
//     },
//     {
//         "eid": "E107",
//         "mobile": "9876543216",
//         "email": "sandeep.verma@example.com",
//         "address": {
//             "city": "Bangalore",
//             "state": "Karnataka",
//             "zip": 560001
//         }
//     },
//     {
//         "eid": "E108",
//         "mobile": "9876543217",
//         "email": "ananya.das@example.com",
//         "address": {
//             "city": "Hyderabad",
//             "state": "Telangana",
//             "zip": 500001
//         }
//     },
//     {
//         "eid": "E109",
//         "mobile": "9876543218",
//         "email": "rahul.kapoor@example.com",
//         "address": {
//             "city": "Chennai",
//             "state": "Tamil Nadu",
//             "zip": 600001
//         }
//     },
//     {
//         "eid": "E110",
//         "mobile": "9876543219",
//         "email": "pooja.khanna@example.com",
//         "address": {
//             "city": "Pune",
//             "state": "Maharashtra",
//             "zip": 411001
//         }
//     }
// ])

// db.emp.aggregate([
//     {
//         $lookup: {
//           from: "contact",
//           localField: "eid",
//           foreignField: "eid",
//           as: "contactInfo"
//         }
//     }
// ])

db.emp.aggregate([
    {
        $lookup: {
          from: "contact",
          localField: "eid",
          foreignField: "eid",
          as: "contactInfo"
        }
    },
    {
        $match: {"contactInfo.address.state": "Delhi"}
    },
    {
        $project: {
          "_id": 0,
          "eid": 1,
          "name": 1,
          "salary": 1,
          "dept": 1,
          "contactInfo.mobile": 1,
          "contactInfo.email": 1,
        }
    },
    {
        $limit: 1
    }
])