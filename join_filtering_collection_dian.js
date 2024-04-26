const { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017/";

// Menerapkan join Collection  dengan kriteria filtering sort

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

      {
        $match: { "data.nama_rak": { $eq: "Database" } }, // kita akan menampilkan hasil join dengan kriteria kondisi berdasarkan nama_rak : Database
      },
      {
        $sort: { "data.kode_buku": 1 }, //mengurutkan data berdasarkan kode_buku secara ascending
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
      db.close();
    });
});
