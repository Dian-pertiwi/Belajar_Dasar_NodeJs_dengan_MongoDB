const { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017/";

// Menerapkan join Collection lebih dari dua koleksi pada MongoDB dengan NodeJs

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("histori")
    .aggregate([
      {
        $lookup: {
          from: "databuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "hasil_data_buku",
        },
      },

      {
        $lookup: {
          from: "lokasibuku",
          localField: "kode_buku",
          foreignField: "kode_buku",
          as: "hasil_data_lokasi",
        },
      },

      {
        $lookup: {
          from: "anggota",
          localField: "kode_anggota",
          foreignField: "kode_anggota",
          as: "hasil_data_anggota",
        },
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
      db.close();
    });
});

/*dari hasil outputnya dari join collection 4 koleksi, 
yaitu koleksi databuku, lokasibuku, anggota, dan histori 
dengan menampilkan hasil dari join pada field hasil_data_buku, hasil_data_lokasi, 
dan hasil_data_anggota */
