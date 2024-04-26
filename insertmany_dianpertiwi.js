const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik");
  var myobj = [
    { kode_mapel: "D02", nama_mapel: "Statistika" },
    { kode_mapel: "D03", nama_mapel: "Matematika Diskrit" },
    { kode_mapel: "D04", nama_mapel: "Basis Data" },
  ];
  dbo.collection("Mata_Pelajaran").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log(
      "Jumlah data yang berhasil ditambahkan adalah: " + res.insertedCount
    );
    db.close();
  });
});
