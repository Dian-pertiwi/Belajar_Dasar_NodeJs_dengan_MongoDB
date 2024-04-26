// const MongoClient = require("mongodb").MongoClient;
// let url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("perpustakaan");
//   dbo.collection("databuku").findOne({}, function (err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// const MongoClient = require("mongodb").MongoClient;
// let url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("perpustakaan");
//   dbo
//     .collection("databuku")
//     .findOne({ judul_buku: "Asal Usul Kota Surabaya" }, function (err, res) {
//       if (err) throw err;
//       console.log(res);
//       db.close();
//     });
// });

const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo.collection("databuku").findOne(
    { judul_buku: "Lampu Hias Kreatifku" },
    {
      projection: {
        judul_buku: 1,
        Pengarang: 1,
      },
    },
    function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    }
  );
});
