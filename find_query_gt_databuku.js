const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find({ thn_terbit: { $gt: 2020 } }) // menampilkan data dengan query menggunakan fungsi $gt, berfungsi untuk menentukan kondisi dengan syarat nilai field harus lebih besar dari nilai yang ditentukan
    // maka hasilnya adalah thn_terbit di atas 2020
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
