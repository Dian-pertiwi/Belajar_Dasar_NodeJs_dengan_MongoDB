// {
//     "_id": {
//       "$oid": "661f4cc2c1486b3ffd117b7c"
//     },
//     "kode_buku": "NM002",
//     "judul_buku": "NodeJS dan MongoDB",
//     "Pengarang": "Gamelab Indonesia",
//     "jml_halaman": 700,
//     "thn_terbit": 2022
//   }

const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik");
  var myobj = [
    {
      kode_buku: "D01",
      judul_buku: "Statistika",
      pengarang: "Educa studio",
      jml_halaman: 700,
      thn_terbit: 2022,
    },
    {
      kode_buku: "D02",
      judul_buku: "Game Development",
      pengarang: "Educa studio",
      jml_halaman: 700,
      thn_terbit: 2022,
    },
    {
      kode_buku: "D03",
      judul_buku: "Web Development",
      pengarang: "Educa studio",
      jml_halaman: 700,
      thn_terbit: 2022,
    },
    {
      kode_buku: "D03",
      judul_buku: "Flutter",
      pengarang: "Gamelab indonesia",
      jml_halaman: 700,
      thn_terbit: 2022,
    },
  ];
  dbo.collection("databuku").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log(
      "Jumlah data yang berhasil ditambahkan adalah: " + res.insertedCount
    );
    db.close();
  });
});
