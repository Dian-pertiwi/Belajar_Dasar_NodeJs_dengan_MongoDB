// const { MongoClient } = require("mongodb").MongoClient;
// let url = "< Access Database URL>";

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("<database_name");
//     dbo.collection("database_collection").find().toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
