// const { ObjectId } = require("mongodb");

// const MongoClient = require("mongodb").MongoClient;
// let url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("Sistem_Informasi_Akademik");
//   var myquery = { _id: ObjectId("6621f0ba7754a0f8126542a8") };
//   dbo.collection("Mata_Pelajaran").deleteOne(myquery, function (err, res) {
//     if (err) throw err;
//     console.log("1 data berhasil dihapus");
//     db.close();
//   });
// });

const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik");
  var myquery = { _id: "6621f0ba7754a0f8126542ab" };
  dbo.collection("Mata_Pelajaran").deleteOne(myquery, function (err, res) {
    if (err) throw err;
    console.log("1 data berhasil dihapus");
    db.close();
  });
});
