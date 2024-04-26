const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find(
      { Pengarang: "Gamelab Indonesia" },
      { projection: { Pengarang: 1, thn_terbit: 1 } }
    ) // penerapan fungsi find () dengan kriteria dan proyeksi
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
