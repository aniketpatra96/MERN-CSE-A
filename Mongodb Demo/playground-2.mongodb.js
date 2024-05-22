//switching to the current working database
use("csea");
//db.employee.find({ dept: { $in: ["HR", "MGR"] } });
//create a collection
//db.createCollection("student");

//insert a record
//database.collectionName.insert[,one,many]

// db.student.insertOne({
//     "roll":4,
//     "name":"Jonathon"
// });

//Insert many records
// db.student.insertMany([
//   {
//     "roll": 5,
//     "name": "Jew",
//   },
//   {
//     "roll": 6,
//     "name": "Jadran",
//   },
//   {
//     "roll": 7,
//     "name": "Mary",
//     "email":"mary@gmail.com",
//     "mobile":7896123412
//   },
// ]);

// display data

// db.student.find();
// // 1 for ascending and -1 for descending
// db.student.find().sort( {"name": 1} );
// db.student.find().limit(2);

/*
  emp with highest salary
  db.emp.find().sort( {sal: -1 } ).limit(1)
  Query
  find({query},{projection},{option})
  0 -skip()
  1- limit()
  db.emp.find({},{"_id:"0,"name":1})

  db.emp.find({"name":"Amit Patel"},{})
  AND operation
  db.emp.find({"dept":"SDE","salary":90000},{})
  Operators in mongo db
  Operator
  logical
  $and
  $not
  $nor
  $or
  {$operator: [{exp1},{exp2},.....{exp'n'}]}
  Comparison
  $eq : equal to
  $ne : not equal to
  $gt : greater than
  $gte : greater than equal to
  $lt : less than
  $lte : less than equal to
  Regular Expression
  $regex : /pattern/flags
  flags are optional

  one emp sde
  db.emp.findOne({"dept":{$eq: "SDE"}})

  db.emp.find({"dept":{$in: ["HR","MGR"]}})

 */
//search operation
//db.employee.find( {"name": /John/} )

//db.employee.find({ name: /^S/ }); //starts with
//db.employee.find({ name: /a$/ }); //ends with

//Update  Operation
// Update({query},{$set:{updates(key:value)}})

//db.employee.updateOne({eid:"E101"},{$set:{salary:60000}});

// db.employee.updateOne({eid:"E102"},{$set:{salary:65000,dept:"MGR"}});

//db.employee.updateMany({dept:"SDE"},{$set:{dept:"SDE-1"}});

//Aggregation Pipeline
// db.employee.aggregate([
//   {
//     $group: {
//       _id: "$dept", //expression to group by condition $dept gives the value
//       avgSal: {
//         $avg: "$salary" //average of salary for each department
//       }
//     }
//   }
// ])

/*aggregate([
  {
    //stage 1
  },
  {
    //stage 2
  },
  ...
])*/

// db.employee.aggregate([
//   {
//     $group: {
//       _id: "$dept", //expression to group by condition $dept gives the value
//       avgSal: {
//         $avg: "$salary", //average of salary for each department
//       },
//     },
//   },
//   {
//     $match:{avgSal:{$gt:70000}}
//   }
// ]);

// db.employee.aggregate([
//   {
//     $group: {
//       _id: null, //expression to group by condition $dept gives the value
//       avgSal: {
//         $avg: "$salary", //average of salary for each department
//       },
//     },
//   }
// ]);

// db.employee.aggregate([
//   {
//     $group: {
//       _id: "$dept", //expression to group by condition $dept gives the value
//       avgSal: {
//         $avg: "$salary", //average of salary for each department
//       },
//     },
//   },
//   {
//     $match: { avgSal: { $gt: 70000 } },
//   },
//   {
//     $project: {
//       _id: 1
//     }
//   }
// ]);

// db.employee.aggregate([
//   {
//     $group: {
//       _id: "$dept",
//       empCount: {
//         $sum: 1,
//       },
//     },
//   }
// ]);

//Join Operation

// db.employee.aggregate([
//   {
//     $lookup: {
//       from: "contact",
//       localField: "eid",
//       foreignField: "eid",
//       as: "Contact-Info"   //alias name
//     }
//   }
// ])/

// db.employee.aggregate([
//   {
//     $lookup: {
//       from: "contact",
//       localField: "eid",
//       foreignField: "eid",
//       as: "Contact-Info", //alias name
//     },
//   },
//   {
//     $match:{"Contact-Info.address.state":"Delhi"}
//   }
// ]);

db.employee.aggregate([
  {
    $lookup: {
      from: "contact",
      localField: "eid",
      foreignField: "eid",
      as: "Contact-Info", //alias name
    },
  },
  {
    $match: { "Contact-Info.address.state": "Delhi" },
  },
  {
    $project: {
      _id: 0,
      eid: 1,
      name: 1,
      salary: 1,
      "Contact-Info.mobile": 1,
      "Contact-Info.email": 1,
      "Contact-Info.address.state": 1,
    },
  },
  {
    $limit: 1,
  },
]);

//db.employee.deleteOne({eid:"E101"})
//db.employee.deleteMany({dept:"MGR"})
//drop a collection
//db.employee.drop()