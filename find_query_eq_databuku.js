const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find({ Pengarang: { $eq: "Gamelab Indonesia" } }) // menampilkan data dengan query menggunakan fungsi $gt, berfungsi untuk mencari dokumen yang memiliki nilai sebuah bidang yang sama dengan nilai tertentu
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
