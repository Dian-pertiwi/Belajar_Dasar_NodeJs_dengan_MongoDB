const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find({ thn_terbit: { $lt: 2022 } }) // menampilkan data dengan query menggunakan fungsi $lt, berfungsi untuk menentukan kondisi dengan syarat nilai field harus lebih kecil dari nilai yang ditentukan
    // maka hasilnya adalah thn_terbit di dibawah 2022
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
