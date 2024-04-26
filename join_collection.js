const { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017/";

// Menerapkan join Collection Koleksi databuku dengan lokasibuku

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .aggregate([
      {
        $lookup: {
          from: "lokasibuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "data",
        },
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
      db.close();
    });
});
