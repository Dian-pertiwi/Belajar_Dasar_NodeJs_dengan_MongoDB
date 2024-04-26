const { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017/";

// Menerapkan join Collection lebih dari dua koleksi  dengan kriteria dan filtering pada MongoDB dengan NodeJs

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

      {
        $match: { "hasil_data_anggota.alamat": { $eq: "Salatiga" } }, // kita akan menampilkan hasil join dengan kriteria kondisi berdasarkan alamat salatiga
      },
      {
        $sort: { "hasil_data_anggota.kode_anggota": 1 }, //mengurutkan hasil_data_anggota berdasarkan kode_anggota secara ascending
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
      db.close();
    });
});

/*dari hasil outputnya dari join collection 4 koleksi, 
berdasarkan kriteria kondisi anggota yang beralamat di Salatiga, 
dengan mengurutkan dokumen secara ascending */
