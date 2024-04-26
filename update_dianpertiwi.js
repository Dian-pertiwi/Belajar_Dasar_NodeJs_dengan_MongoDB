const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik");
  var myquery = { nama_mapel: "Statistika" };
  var newvalues = {
    $set: { kode_mapel: "D02", nama_mapel: "Statistika Pemrograman" },
  };
  dbo
    .collection("Mata_Pelajaran")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 data berhasil di update");
      db.close();
    });
});
