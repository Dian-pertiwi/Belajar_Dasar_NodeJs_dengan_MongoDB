const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

// menampilkan data dengan kombinasi sort dan limit secara ascending pada koleksi databuku
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  var mysort = { judul_buku: 1 }; // value yang digunakan utk mengurutkan dokumen secara ascending pada fungsi sort adalah angka 1.
  dbo
    .collection("databuku")
    .find()
    .sort(mysort)
    .limit(3)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
