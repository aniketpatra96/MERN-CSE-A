//21BCSE30 | ANIKET PATRA
//Q.1
use("csea");
db.createCollection("StudentInfo");
db.createCollection("StudentAcademicInfo");

//Q.2
use("csea");
db.StudentInfo.insertOne({
  name: "Rahul Sharma",
  rollno: 101,
  mobile: "9876543210",
  email: "rahul.sharma@example.com",
  address: {
    city: "Bhubaneswar",
    state: "Odisha",
    pin: "400001",
  },
});
use("csea");
db.StudentAcademicInfo.insertOne({
  rollno: 101,
  program: "B.Tech",
  branch: "Computer Science",
  cgpa: 8.8,
});

//Q.3
use("csea");
db.StudentInfo.insertMany([
  {
    name: "Priya Patel",
    rollno: 102,
    mobile: "8765432109",
    email: "priya.patel@example.com",
    address: {
      city: "Ahmedabad",
      state: "Gujarat",
      pin: "380001",
    },
  },
  {
    name: "Sandeep Singh",
    rollno: 103,
    mobile: "7654321098",
    email: "sandeep.singh@example.com",
    address: {
      city: "Delhi",
      state: "Delhi",
      pin: "110001",
    },
  },
  {
    name: "Neha Gupta",
    rollno: 104,
    mobile: "6543210987",
    email: "neha.gupta@example.com",
    address: {
      city: "Bangalore",
      state: "Karnataka",
      pin: "560001",
    },
  },
  {
    name: "Rajesh Verma",
    rollno: 105,
    mobile: "5432109876",
    email: "rajesh.verma@example.com",
    address: {
      city: "Chennai",
      state: "Tamil Nadu",
      pin: "600001",
    },
  },
  {
    name: "Anita Sharma",
    rollno: 106,
    mobile: "4321098765",
    email: "anita.sharma@example.com",
    address: {
      city: "Kolkata",
      state: "West Bengal",
      pin: "700001",
    },
  },
  {
    name: "Amit Patel",
    rollno: 107,
    mobile: "3210987654",
    email: "amit.patel@example.com",
    address: {
      city: "Hyderabad",
      state: "Telangana",
      pin: "500001",
    },
  },
  {
    name: "Deepa Singh",
    rollno: 108,
    mobile: "2109876543",
    email: "deepa.singh@example.com",
    address: {
      city: "Pune",
      state: "Maharashtra",
      pin: "411001",
    },
  },
  {
    name: "Rajat Verma",
    rollno: 109,
    mobile: "1098765432",
    email: "rajat.verma@example.com",
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      pin: "302001",
    },
  },
  {
    name: "Pooja Gupta",
    rollno: 110,
    mobile: "9876543210",
    email: "pooja.gupta@example.com",
    address: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      pin: "226001",
    },
  },
]);
use("csea");
db.StudentAcademicInfo.insertMany([
  {
    rollno: 102,
    program: "B.Tech",
    branch: "Mechanical Engineering",
    cgpa: 9.5,
  },
  {
    rollno: 103,
    program: "B.Tech",
    branch: "Electrical Engineering",
    cgpa: 8.9,
  },
  {
    rollno: 104,
    program: "B.Tech",
    branch: "Civil Engineering",
    cgpa: 7.7,
  },
  {
    rollno: 105,
    program: "B.Tech",
    branch: "Electrical Engineering",
    cgpa: 9.0,
  },
  {
    rollno: 106,
    program: "B.Tech",
    branch: "Information Technology",
    cgpa: 9.6,
  },
  {
    rollno: 107,
    program: "M.Tech",
    branch: "Aerospace Engineering",
    cgpa: 9.9,
  },
  {
    rollno: 108,
    program: "M.Tech",
    branch: "Biotechnology",
    cgpa: 8.8,
  },
  {
    rollno: 109,
    program: "B.Tech",
    branch: "Computer Science",
    cgpa: 9.7,
  },
  {
    rollno: 110,
    program: "B.Tech",
    branch: "Computer Science",
    cgpa: 9.0,
  },
]);

//Q.4
use("csea");
db.StudentInfo.find();
use("csea");
db.StudentAcademicInfo.find();

//Q.5
use("csea");
db.StudentAcademicInfo.find({ rollno: 102 });

//Q.6
use("csea");
db.StudentInfo.updateOne({ rollno: 103 }, { $set: { mobile: "9876543211" } });

//Q.7
use("csea");
db.StudentInfo.updateOne(
  { rollno: 106 },
  { $set: { address: { city: "Cuttack", state: "Odisha" } } }
);

//Q.8
use("csea");
db.StudentAcademicInfo.updateMany(
  { branch: "Computer Science" },
  { $set: { branch: "Computer Science and Engineering" } }
);

//Q.9
use("csea");
db.StudentAcademicInfo.find({ cgpa: { $gt: 9.0 } });

//Q.10
use("csea");
db.StudentAcademicInfo.find({
  branch: "Computer Science and Engineering",
  cgpa: { $gt: 9.0 },
});

//Q.11
use("csea");
db.StudentInfo.find({
  "address.state": { $in: ["Odisha", "Maharashtra", "Karnataka"] },
});

//Q.12
use("csea");
db.StudentAcademicInfo.find().sort({ cgpa: -1 });

//Q.13
use("csea");
db.StudentAcademicInfo.aggregate({
  $group: {
    _id: "$branch",
    NoOfStudents: { $sum: 1 },
  },
});

//Q.14
use("csea");
db.StudentAcademicInfo.aggregate(
  {
    $group: {
      _id: "$program",
      NoOfStudents: { $sum: 1 },
    },
  },
  {
    $match: { _id: "M.Tech" },
  }
);

//Q.15
use("csea");
db.StudentAcademicInfo.aggregate({
  $group: {
    _id: null,
    avgCGPA: { $avg: "$cgpa" },
  },
});

//Q.16
use("csea");
db.StudentInfo.aggregate([
  {
    $lookup: {
      from: "StudentAcademicInfo",
      localField: "rollno",
      foreignField: "rollno",
      as: "Academic Details", //alias name
    },
  },
]);

//Q.17
use("csea");
db.StudentInfo.aggregate([
  {
    $lookup: {
      from: "StudentAcademicInfo",
      localField: "rollno",
      foreignField: "rollno",
      as: "Academic Details", //alias name
    },
  },
  {
    $project: {
      _id: 0,
      rollno: 1,
      name: 1,
      "Academic Details.program": 1,
      "Academic Details.branch": 1,
      "Academic Details.cgpa": 1,
    },
  },
]);

//Q.18
use("csea");
db.StudentInfo.aggregate([
  {
    $lookup: {
      from: "StudentAcademicInfo",
      localField: "rollno",
      foreignField: "rollno",
      as: "Academic Details", //alias name
    },
  },
  {
    $match: { "address.state": "Odisha" },
  },
  {
    $project: {
      _id: 0,
      rollno: 1,
      name: 1,
      "address.city": 1,
      "address.state": 1,
      "Academic Details.cgpa": 1,
    },
  },
]);

//Q.19
use("csea");
db.StudentInfo.deleteOne({ rollno: 109 });
db.StudentAcademicInfo.deleteOne({ rollno: 109 });

//Q.20
use("csea");
db.StudentInfo.deleteMany({
  rollno: {
    $in: db.StudentAcademicInfo.distinct("rollno", { program: "M.Tech" }),
  },
});
db.StudentAcademicInfo.deleteMany({ program: "M.Tech" });
