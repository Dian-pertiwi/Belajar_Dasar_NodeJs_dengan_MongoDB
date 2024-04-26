const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik");
  var myquery = { pengarang: "Educa studio" };
  dbo.collection("databuku").deleteMany(myquery, function (err, res) {
    if (err) throw err;
    console.log(res.deletedCount + " data berhasil dihapus");
    db.close();
  });
});
